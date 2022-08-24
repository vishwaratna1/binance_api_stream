
# BINANCE API DATA STREAM
```
https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","ENJUSDT","GRTUSDT"]
```

- Stream the data received from above endpoint through socket after every 5 seconds. Purpose is to show users real time updates on coin prices.

---
---
---
---
---

### DOCUMENTATION
- Follow these steps to setup and start the Application.
    #### Open terminal and follow these steps to setup server
   - #### Step 1
    ```
    git clone https://github.com/vishwaratna1/binance_api_stream.git
    ```
    ### SERVER
    - #### Step 2
    ```
    cd binance_api_stream/server
    ```
    - #### Step 3
    ```
    yarn
    or,
    npm install
    ```
    - Step 4
    ```
    yarn start
    or,
    npm start
    ```
    ---
   
    #### Open another terminal and follow the steps to setup client

    ---

    ### CLIENT
    - #### Step 2
    ```
    cd binance_api_stream/client
    ```
    - #### Step 3
    ```
    yarn
    or,
    npm install
    ```
    - Step 4
    ```
    yarn start
    or,
    npm start
    ```
