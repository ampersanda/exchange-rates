(ns exhangeratesapi.core
  (:require [reagent.core :as reagent
             :refer           [atom]]
            [ajax.core :refer [GET POST]]))

(def default-base "USD")

(defonce app-state
  (atom
   {:exchange {:base        default-base
               :last-update-date nil
               :bases       '()
               :rates       nil
               :added-rates #{}
               :value 1}}))

(defn exchange-rates []
  (let [base-placeholder "Please select currecy base.."
        api-url "https://api.exchangeratesapi.io/latest"]

    (reagent/create-class
     {:display-name         "exchange-rates"
      :component-will-mount (fn [this]
                              (GET
                                api-url
                                {:params        {:base (:base (:exchange @app-state))}
                                 :handler       (fn [response]
                                                  (swap! app-state assoc-in [:exchange :last-update-date]
                                                         (-> response (get-in ["date"])))

                                                                                                          ;; add keys of base rates to atom
                                                  (swap! app-state assoc-in [:exchange :bases]
                                                         (-> response (get-in ["rates"]) (keys)))

                                                                                                          ;; add rates to atom
                                                  (swap! app-state assoc-in [:exchange :rates]
                                                         (-> response (get-in ["rates"]))))

                                 :error-handler (fn [{:keys [status status-text]}]
                                                  (js/console.error (str "Something Bad happened: " status " " status-text))
                                                  (js/alert (case status
                                                              0 (str status-text. "Please check you internet connection"))))}))
      :reagent-render       (let [selected-option (atom default-base)]

                              ;; render 
                              (fn []
                                (let [exchange    (:exchange @app-state)
                                      base        (:base exchange)
                                      rates       (:rates exchange)
                                      bases       (:bases exchange)
                                      added-rates (:added-rates exchange)
                                      date (:last-update-date exchange)
                                      value-to-exchange (:value exchange)]
                                  [:div
                                   [:div.bases
                                    [:p (str "latest update date -> " date)]

                                    ; [:label {:for "bases"} "Base Currency"]
                                    ; [:select
                                    ;  {:name          "bases"
                                    ;   :default-value base
                                    ;   :on-change     (fn [e]
                                    ;                    (let  [v (.. e -target -value)]
                                    ;                      (if (= base-placeholder v)
                                    ;                        default-base
                                    ;                        (swap! app-state assoc-in [:exchange :base] v))))}
                                    ;  [:option base-placeholder]
                                    ;  (map #(vector :option {:key %} %) bases)]
                                    ; [:p (str "Selected Base -> " (:base exchange))]

                                    ;; value to exchange
                                    [:label {:for "base-value"}]
                                    [:input {:type "number"
                                             :default-value 1
                                             :max-length 10
                                             :placeholder "Input number to exchange"
                                             :on-change #(swap! app-state assoc-in [:exchange :value] (-> % .-currentTarget .-value))}] base
                                    [:br]

                                                                      ;; input
                                    [:label {:for "add-base"} "Add Currency"]
                                    [:select
                                     {:name      "add-base"
                                      :on-change (fn [e]
                                                   (let [v (.. e -target -value)]
                                                     (if (= base-placeholder v) default-base (reset! selected-option v))))}
                                     [:option base-placeholder]
                                     (map #(vector :option {:key %} %) bases)]

                                    [:button {:on-click
                                              #(swap! app-state update-in
                                                      [:exchange :added-rates]
                                                      conj {:base @selected-option
                                                            :rate (-> rates (get @selected-option))})} "Add"]

                                                                                                          ;; added rates                                  
                                    (if added-rates
                                      [:div
                                       [:ul
                                        (map #(vector :li
                                                      {:key (:base %)}
                                                      [:span 
                                                       (str (* value-to-exchange (:rate %)) " " (:base %))
                                                       [:button {:on-click (fn [e]
                                                                             (swap! app-state update-in
                                                                                    [:exchange :added-rates]
                                                                                    disj {:base (:base %)
                                                                                          :rate (:rate %)}))} "delete"]]
                                                      ) added-rates)]]
                                      [:p "no rates"])]])))})))


(defn start []
  (reagent/render-component [exchange-rates]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
