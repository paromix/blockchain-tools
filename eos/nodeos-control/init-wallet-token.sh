sudo docker exec -it eosio /bin/bash -c "\
cleos wallet create && \
cleos wallet import --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3 && \
cleos create account eosio eosio.token EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV && \
cleos set contract eosio.token /contracts/eosio.token -p eosio.token && \
cleos push action eosio.token create '[\"eosio\", \"10000000000.0000 EOS\",0,0,0]' -p eosio.token && \
cleos push action eosio.token issue '[\"eosio\",\"1000000000.0000 EOS\", \"issue\"]' -p eosio && \
cleos create account eosio dcentaccount EOS5vGPaEhW2Ttw6RMTdV8NPsFpD5mrTH6jg9mzXWYapTw6d17EWr EOS5vGPaEhW2Ttw6RMTdV8NPsFpD5mrTH6jg9mzXWYapTw6d17EWr && \
cleos push action eosio.token transfer '{\"from\":\"eosio\",\"to\":\"dcentaccount\",\"quantity\":\"20.0000 EOS\",\"memo\":\"sample\"}' -p eosio \
"
