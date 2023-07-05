# ChatGPT API

[api] - ChatGPT Clone with NodeJS, Express and TypeScript

## GET Endpoints:

- / : Main endpoint, can be used to check the api status, if active, will return: `{"message": "All services active."}`
- /api/models : Returns a list of available models from OpenAI: `{"models": "[...]"`

## POST Endpoints:

- /api : Returns a message when a prompt + model is sent

Payload sample:

```
{
    "message" : "What's the capital of Lebanon?",
    "currentModel" : "text-davinci-003"
}
```

Response:

```
{
    "message": "\n\nBeirut."
}
```

## How to use:

> Before you can run this app, you need to get an API KEY from OpenAI, please go to [OpenAI Docs](https://platform.openai.com/docs/api-reference) and add your API KEY into the .env file as a value for OPENAI_API_KEY.

For a better experience you can also check the [ChatGPT Clone Client](https://github.com/jhonnierandrey/chatgpt-clone-frnt) that was created for this API.

1. Clone this repo

   ```bash
       git clone https://github.com/jhonnierandrey/chatgpt-clone-bk
   ```

2. Install all the required dependencies.

   ```bash
       npm i
   ```

3. To start on your local machine:

   ```bash
       npm start
   ```

4. OPTIONAL : To start on your local machine (development server with nodemon):

   ```bash
       npm run serve
   ```

## Contributing

1. Fork it (<https://github.com/jhonnierandrey/chatgpt-clone-bk/fork>)
2. Create your own branch (`git checkout -b newFeature/yourIdea`)
3. Commit your changes (`git commit -m 'Add your commit'`)
4. Push to the branch (`git push`)
5. Create a new Pull Request

### References

[OpenAI Docs](https://platform.openai.com/docs/api-reference)

### License

This project is licensed under the MIT License
