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

  button {
    margin-top: 16px;
    padding: 14px 22px;
    border: 0;
    border-radius: 8px;
    background: #f97316;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
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
    margin-top: 0;
    background: #374151;
    font-size: 14px;
    padding: 10px 16px;
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
    <div class="subtitle">Paste one load below. Get your posting message back.</div>

    <textarea
      id="loadInput"
      placeholder="Paste load information here..."
    ></textarea>

    <br>
    <button id="processButton">Create Message</button>

    <div class="result-wrap">
      <div class="result-header">
        <h2>Message</h2>
        <button id="copyButton">Copy</button>
      </div>

      <div id="result">Your message will appear here.</div>
    </div>

    <div class="note">
      V1 • One load at a time
    </div>
  </div>

<script>
  const input = document.getElementById("loadInput");
  const result = document.getElementById("result");
  const processButton = document.getElementById("processButton");
  const copyButton = document.getElementById("copyButton");

  processButton.addEventListener("click", async () => {
    const loadText = input.value.trim();

    if (!loadText) {
      result.textContent = "Paste a load first.";
      return;
    }

    result.textContent = "Processing...";

    // AI processing will be connected in the next step.
    setTimeout(() => {
      result.textContent =
        "Dover Agent is ready.\\n\\n" +
        "Your load was received. AI message generation will be connected next.";
    }, 500);
  });

  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(result.textContent);

    const original = copyButton.textContent;
    copyButton.textContent = "Copied!";
    
    setTimeout(() => {
      copyButton.textContent = original;
    }, 1500);
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
