export default {
  async fetch(request) {
    return new Response(
      `Dover Agent is running.`,
      {
        headers: {
          "content-type": "text/plain;charset=UTF-8",
        },
      }
    );
  },
};

