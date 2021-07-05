// get products
function getProducts(url) {
  let products = [];
  let isLoading = false;
  this.$http.get(url)
    .then((res) => {
      if (res.data.success) {
        products = res.data.products;
        isLoading = false;
      } else {
        // eslint-disable-next-line no-alert
        alert(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
    return { products, isLoading };
}
