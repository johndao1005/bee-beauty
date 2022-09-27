module.exports = ({ env }) => ({
  url: env("https://bee-beauty.herokuapp.com/"),
  proxy: true,
  app:{
    keys:env.array('APP_KEYS',['q8zO4v1C7UvalgAFjwoyBg==,ngd7fP27Kku+uXziddlHHA==,4njcqfobHf/aFQ9q4pp0zg==,wmXJPtc3R125XXECWmM14g==']),
  }
});
