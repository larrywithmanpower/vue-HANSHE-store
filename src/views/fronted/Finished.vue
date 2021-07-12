<template>
  <section
    class="container-fluid bg-light py-6 text-white"
    style="position: relative"
  >
    <div class="row">
      <div
        class="col-md-5 banner"
        style="position: absolute; top: 0; bottom: 0"
      ></div>
      <div class="container z-index-1">
        <div class="row justify-content-end text-md-dark">
          <div class="col-md-7">
            <h3 class="text-primary fw-bold">恭喜完成付款</h3>
            <p>
              付款完成後，商品預計3~5天內寄出，還請耐心等待!!
            </p>
            <a href="#" class="btn btn-outline-primary">繼續購物</a>
            <div class="mt-5">
              <h3 class="text-danger">熱銷商品</h3>
              <p>
                遍地烽火，台電影星空，Galaxy，鄧志偉揮巨炮，近兩年最大，國內油價連3漲，上學遇到洪七公。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url(https://images.unsplash.com/photo-1579460372796-3aa720f44e46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80);
  background-size: cover;
  background-position: center bottom;
}
.z-index-1 {
  z-index: 99;
}

@media (min-width: 768px) {
  .text-md-dark {
    color: black;
  }
}
</style>
