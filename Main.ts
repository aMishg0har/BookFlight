{
  "$kind": "Microsoft.AdaptiveDialog",
  "$designer": {
    "name": "BookFlightapp",
    "description": "",
    "id": "A79tBe"
  },
  "autoEndDialog": true,
  "defaultResultProperty": "dialog.result",
  "triggers": [
    {
      "$kind": "Microsoft.OnIntent",
      "$designer": {
        "id": "CTd0Hn",
        "name": "bookflight"
      },
      "intent": "bookflight",
      "condition": "= #bookflight.score>=0.500000",
      "actions": [
        {
          "$kind": "Microsoft.AttachmentInput",
          "$designer": {
            "id": "DbuWqO"
          },
          "disabled": false,
          "maxTurnCount": 3,
          "alwaysPrompt": false,
          "allowInterruptions": false,
          "prompt": "${AttachmentInput_Prompt_DbuWqO()}",
          "unrecognizedPrompt": "",
          "invalidPrompt": "",
          "property": "details",
          "value": {
            "content": {
              "type": "AdaptiveCard",
              "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
              "version": "1.3",
              "body": [
                {
                  "type": "Input.Text",
                  "id": "airline",
                  "label": "Kindly provide your preferred airline name"
                },
                {
                  "type": "Input.Date",
                  "id": "date",
                  "label": "Kindly select your journey date"
                },
                {
                  "type": "ActionSet",
                  "actions": [
                    {
                      "type": "Action.Submit",
                      "title": "Submit"
                    }
                  ]
                }
              ]
            },
            "name": "Details"
          }
        },
        {
          "$kind": "Microsoft.SendActivity",
          "$designer": {
            "id": "zEbeQs"
          },
          "activity": "${SendActivity_zEbeQs()}"
        }
      ]
    }
  ],
  "generator": "BookFlightapp.lg",
  "id": "BookFlightapp",
  "recognizer": "BookFlightapp.lu.qna"
}