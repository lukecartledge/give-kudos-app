// workflows/give_kudos.ts
import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const GiveKudosWorkflow = DefineWorkflow({
  callback_id: "give_kudos_workflow",
  title: "Give kudos",
  description: "Acknowledge the impact someone had on you",
  input_parameters: {
    properties: {
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
    },
    required: ["interactivity"],
  },
});

// your steps go here

export { GiveKudosWorkflow };
