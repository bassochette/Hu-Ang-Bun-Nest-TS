# Using LLM model locally with Ollama

I love tinkering with AI however I'm no AI farmer (those peeps are hot right now).

Piping everything through OpenAI API kinds of creeps me.
Because 'merica is known for spying and using populations private for imperialist fourberie.
And foremost, 'caus I don't wanna pay! oh yeah!

Solution:

- Install Ollama
- Chose a lightweight model
- call the local api
- make supposition on how to deploy

## Install Ollama

You follow the link and do the install: [THE Link](https://ollama.com).

## Chose a lightweight model

I chose [deepseek-r1:7b](https://ollama.com/library/deepseek-r1)

`ollama pull deepseek-r1:7b` you might have to `ctrl+B` to exit the prompt.

My old laptop is not starting to catch fire while running completion feel free to use beefier models if you can.

Pull as many as your disk space allow if you want.

## Call the API

- Ollama daemon must be running `ollama serve`
- No need to be in the prompt of a model.
- [detailed documentation](https://github.com/ollama/ollama/blob/main/docs/api.md)
- you can set any model you pulled in the model params

Easy to use generate endpoint:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "deepseek-r1:7b",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
```

OpenAI API style chat:

```bash
curl http://localhost:11434/api/chat -d '{
  "model": "deepseek-r1:7b",
  "messages": [
    {
      "role": "user",
      "content": "why is the sky blue?"
    }
  ]
}'
```

And now, you are a good softwarer and go implement in your project using the http libs you use usually.

What? you are to lazy and just want to use the OpenAI client?
*Well of course you can*! [documentation](https://ollama.com/blog/openai-compatibility)

```typescript
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "http://localhost:11434",
  apiKey: 'ollama'
});
```

Go play with that now!

#AI #OpenAI #Ollama #BreakFree #deepseek