export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dover Agent</title>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #111827;
    color: #f9fafb;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 50px 20px;
  }

  h1 {
    margin: 0 0 8px;
    font-size: 32px;
  }

  .subtitle {
    color: #9ca3af;
    margin-bottom: 30px;
  }

  textarea {
    width: 100%;
    min-height: 360px;
    padding: 18px;
    border-radius: 10px;
    border: 1px solid #374151;
    background: #1f2937;
    color: #f9fafb;
    font-size: 15px;
    line-height: 1.5;
    resize: vertical;
  }

  .result-wrap {
    margin-top: 30px;
  }

  .result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #result {
    margin-top: 12px;
    min-height: 120px;
    padding: 18px;
    border-radius: 10px;
    border: 1px solid #374151;
    background: #1f2937;
    white-space: pre-wrap;
    color: #d1d5db;
  }

  #copyButton {
    padding: 10px 16px;
    border: 0;
    border-radius: 8px;
    background: #374151;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  #copyButton:hover {
    opacity: 0.9;
  }

  .status {
    margin-top: 12px;
    color: #9ca3af;
    font-size: 14px;
    min-height: 20px;
  }

  .note {
    margin-top: 14px;
    color: #6b7280;
    font-size: 13px;
  }
</style>
</head>

<body>
  <div class="container">
    <h1>Dover Agent</h1>
    <div class="subtitle">
      Paste one load below. Dover Agent processes it automatically.
    </div>

    <textarea
      id="loadInput"
      placeholder="Paste load information here..."
      autofocus
    ></textarea>

    <div id="status" class="status"></div>

    <div class="result-wrap">
      <div class="result-header">
        <h2>Message</h2>
        <button id="copyButton">Copy</button>
      </div>

      <div id="result">Your message will appear here.</div>
    </div>

    <div class="note">
      V1 • One load at a time • Paste → Process → Copy
    </div>
  </div>

<script>
  const input = document.getElementById("loadInput");
  const result = document.getElementById("result");
  const status = document.getElementById("status");
  const copyButton = document.getElementById("copyButton");

  let processingTimer;

  function processLoad() {
    const loadText = input.value.trim();

    if (!loadText) {
      result.textContent = "Your message will appear here.";
      status.textContent = "";
      return;
    }

    status.textContent = "Processing...";
    result.textContent = "Processing load...";

    // Temporary placeholder until AI is connected.
    setTimeout(() => {
      result.textContent =
        "Dover Agent received your load.\\n\\n" +
        "AI message generation will replace this response next.";

      status.textContent = "Ready.";
    }, 500);
  }

  // Automatically process whenever text is pasted or changed.
  input.addEventListener("input", () => {
    clearTimeout(processingTimer);

    processingTimer = setTimeout(() => {
      processLoad();
    }, 300);
  });

  copyButton.addEventListener("click", async () => {
    const message = result.textContent;

    if (
      !message ||
      message === "Your message will appear here." ||
      message === "Processing load..."
    ) {
      return;
    }

    try {
      await navigator.clipboard.writeText(message);

      const original = copyButton.textContent;
      copyButton.textContent = "Copied!";

      setTimeout(() => {
        copyButton.textContent = original;
      }, 1500);
    } catch (error) {
      copyButton.textContent = "Copy failed";

      setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1500);
    }
  });
</script>
</body>
</html>
`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
