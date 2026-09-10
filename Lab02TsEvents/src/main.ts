import { handleUiEvent } from "./events";

async function main() {
  try {
    await handleUiEvent({
      type: "click",
      x: 100,
      y: 200
    });

    await handleUiEvent({
      type: "submit",
      formId: "loginForm",
      values: {
        username: "Eunice",
        password: "12345"
      }
    });

    await handleUiEvent({
      type: "error",
      message: "Sample error message"
    });

    await handleUiEvent({
      type: "submit",
      formId: "testForm",
      values: {
        username: "",
        password: "12345"
      }
    });

  } catch (error) {
    console.error((error as Error).message);
  }
}

main();