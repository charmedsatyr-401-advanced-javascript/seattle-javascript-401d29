const mock = [
  {
    pattern: "/api/v1/(.*)/(.*)",

    fixtures: function(match, params, headers, context) {},

    get: function(match) {
      const [path, model, id] = match;
      let body;
      let data = { name: "test" };

      if (model && id) {
        body = data;
      } else if (model) {
        body = { count: 1, results: [data] };
      }

      return { status: 200, body };
    },

    post: function(match, data) {
      return {
        status: 201
      };
    }
  }
];

export default mock;
