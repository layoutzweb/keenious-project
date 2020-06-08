# Keenious Project
This project is broken into two parts, a server and a client application, all of which runs in docker containers including
the persistence layer that is done with MongoDB. 

# Usage
Everything is simple to run, all you have to do is run this 2 simple steps, first create a network:
```docker network create kn_default```

Second, run the docker compose command to get the full stack running:
```docker-compose up -d```

The client application runs on port `http://localhost:3001`, the server and api runs on `http://localhost:3000`.


# Considerations
I've chosen a framework I had never worked with Evergreen UI, which is great but it did generate a bit of repetition
with element properties and so on. Using style components this could be mitigated to the minimum.

Not all configurations are fine tuned, like linters, there could be more time spent fine tuning the rules and automating
when they run.

Typings could also be improved, ut I was moving fast with limited time so did the best I could with the available time.


