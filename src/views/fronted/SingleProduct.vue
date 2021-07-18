<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-6 mb-3">
        <img class="img-fluid" :src="product.imageUrl" alt="product.title" />
      </div>
      <div class="col-md-6 px-5">
        <h3>{{ product.title }}</h3>
        <ul class="d-flex list-unstyled align-items-center">
          <li class="text-warning me-3">
            <span class="me-1">{{ product.rate }}</span>
            <span v-if="product.rate === '5.0'">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
            </span>
            <span v-else-if="product.rate === '4.0'">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </span>
            <span v-else-if="product.rate === '3.0'">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
              <i class="bi bi-star me-1"></i>
            </span>
            <span v-else-if="product.rate === '2.0'">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
              <i class="bi bi-star me-1"></i>
              <i class="bi bi-star me-1"></i>
            </span>
            <span v-else-if="product.rate === '1.0'">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
              <i class="bi bi-star me-1"></i>
              <i class="bi bi-star me-1"></i>
              <i class="bi bi-star me-1"></i>
            </span>
          </li>
          <li class="me-3" v-if="product.is_hot">
            <span class="badge bg-danger">熱賣品</span>
          </li>
          <li>
            <span class="badge bg-success" v-if="product.storageNum > 0"
              >有庫存</span
            >
            <span class="badge bg-secondary" v-else>無庫存</span>
          </li>
        </ul>
        <h2 class="text-primary">$ {{ product.price }}</h2>
        <small class="text-muted">類別：{{ product.category }}</small
        ><br />
        <small class="text-muted">庫存量：{{ product.storageNum }}</small>
        <hr class="bg-secondary" />
        <p class="fs-5">{{ product.description }}</p>
        <hr class="bg-secondary" />
        <div class="input-group mb-4">
          <button
            class="btn btn-primary"
            type="button"
            @click="qty--"
            :disabled="product.storageNum === 0"
          >
            <i class="bi bi-dash"></i>
          </button>
          <input
            type="text"
            class="form-control text-center"
            min="1"
            v-model.Number="qty"
            :disabled="product.storageNum === 0"
          />
          <button
            class="btn btn-primary"
            type="button"
            @click="qty++"
            :disabled="product.storageNum === 0"
          >
            <i class="bi bi-plus"></i>
          </button>
          <button
            class="btn btn-outline-primary d-none d-md-block"
            type="button"
            @click="addCart(product.id)"
            :disabled="product.storageNum === 0"
          >
            加入購物車
          </button>
        </div>
        <button
          class="btn btn-outline-primary d-block d-md-none w-100"
          type="button"
          @click="addCart(product.id)"
          :disabled="product.storageNum === 0"
        >
          加入購物車
        </button>
      </div>
      <!-- nav pill -->
      <ul
        class="nav nav-pills nav-fill justify-content-center mb-3 px-2 col-12"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            商品介紹
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            尺碼規格表
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            評價
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active fs-5"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          v-html="product.content"
        ></div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <h2 class="h3 mb-3">
            <span class="text-primary border-bottom border-primary border-2 pb-1">
              男鞋尺碼參考
            </span>
          </h2>
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th>腳長 (cm)</th>
                  <td>24</td>
                  <td>24.5</td>
                  <td>25</td>
                  <td>25.5</td>
                  <td>26</td>
                  <td>26.5</td>
                  <td>27</td>
                  <td>27.5</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td class="rounded">30.5</td>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <th>歐碼</th>
                    <td>38.5</td>
                    <td>39</td>
                    <td>40</td>
                    <td>40.5</td>
                    <td>41</td>
                    <td>42</td>
                    <td>42.5</td>
                    <td>43</td>
                    <td>44</td>
                    <td>44.5</td>
                    <td>46</td>
                    <td>47</td>
                  </tr>
                  <tr>
                    <th>英國碼 uk</th>
                    <td>5</td>
                    <td>5.5</td>
                    <td>6</td>
                    <td>6.5</td>
                    <td>7</td>
                    <td>7.5</td>
                    <td>8</td>
                    <td>8.5</td>
                    <td>9</td>
                    <td>9.5</td>
                    <td>11</td>
                    <td>11.5</td>
                  </tr>
                  <tr>
                    <th>美國碼 us</th>
                    <td>6</td>
                    <td>6.5</td>
                    <td>7</td>
                    <td>7.5</td>
                    <td>8</td>
                    <td>8.5</td>
                    <td>9</td>
                    <td>9.5</td>
                    <td>10</td>
                    <td>10.5</td>
                    <td>12</td>
                    <td>12.5</td>
                  </tr>
                </tbody>
            </table>
          </div>
          <h2 class="h3 mb-3">
            <span class="text-primary border-bottom border-primary border-2 pb-1">
              女鞋尺碼參考
            </span>
          </h2>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>腳長 (cm)</th>
                  <td>21.5</td>
                  <td>22</td>
                  <td>22.5</td>
                  <td>23</td>
                  <td>23.5</td>
                  <td>24</td>
                  <td>24.5</td>
                  <td>25</td>
                  <td>25.5</td>
                  <td>26</td>
                  <td>26.5</td>
                  <td>27</td>
                  <td>27.5</td>
                  <td>28</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>歐碼</th>
                  <td>34</td>
                  <td>35</td>
                  <td>36</td>
                  <td>37</td>
                  <td>37.5</td>
                  <td>38</td>
                  <td>38.5</td>
                  <td>39</td>
                  <td>40</td>
                  <td>40.5</td>
                  <td>41</td>
                  <td>42</td>
                  <td>42.5</td>
                  <td>43</td>
                </tr>
                <tr>
                  <th>英國碼 uk</th>
                  <td>1.5</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3.5</td>
                  <td>4</td>
                  <td>4.5</td>
                  <td>5</td>
                  <td>5.5</td>
                  <td>6</td>
                  <td>6.5</td>
                  <td>7</td>
                  <td>7.5</td>
                  <td>8</td>
                  <td>8.5</td>
                </tr>
                <tr>
                  <th>美國碼 us</th>
                  <td>4</td>
                  <td>4.5</td>
                  <td>5.5</td>
                  <td>6</td>
                  <td>6.5</td>
                  <td>7</td>
                  <td>7.5</td>
                  <td>8</td>
                  <td>8.5</td>
                  <td>9</td>
                  <td>9.5</td>
                  <td>10</td>
                  <td>10.5</td>
                  <td>11</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-2">
                <div v-for="(user, index) in users" :key="user.name">
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <img :src="user.picture.thumbnail" alt="" class="rounded-circle"/>
                      <h4 class="mb-0 ms-3">{{ user.name.first }}</h4>
                    </div>
                    <div>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                    </div>
                  </div>
                  <p v-for="(review, i) in reviews" :key="i">
                    <span v-if="index === 0">
                      {{ review[1] }}
                    </span>
                    <span v-if="index === 1">
                      {{ review[2] }}
                    </span>
                    <span v-if="index === 2">
                      {{ review[3] }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="review_box">
                <h4>給予您的評價</h4>
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="#"
                    class="link-warning"
                    @click.prevent="!isClick1 ? isClick1 = true : isClick1 = false"
                    >
                      <i class="bi bi-star-fill" v-show="isClick1"></i>
                      <i class="bi bi-star" v-show="!isClick1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                    class="link-warning"
                    @click.prevent="!isClick2 ? isClick2 = true : isClick2 = false"
                    >
                      <i class="bi bi-star-fill" v-show="isClick2"></i>
                      <i class="bi bi-star" v-show="!isClick2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                    class="link-warning"
                    @click.prevent="!isClick3 ? isClick3 = true : isClick3 = false"
                    >
                      <i class="bi bi-star-fill" v-show="isClick3"></i>
                      <i class="bi bi-star" v-show="!isClick3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                    class="link-warning"
                    @click.prevent="!isClick4 ? isClick4 = true : isClick4 = false"
                    >
                      <i class="bi bi-star-fill" v-show="isClick4"></i>
                      <i class="bi bi-star" v-show="!isClick4"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                    class="link-warning"
                    @click.prevent="!isClick5 ? isClick5 = true : isClick5 = false"
                    >
                      <i class="bi bi-star-fill" v-show="isClick5"></i>
                      <i class="bi bi-star" v-show="!isClick5"></i>
                    </a>
                  </li>
                </ul>
                <p>評價內容</p>
                <form
                  class="row"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="col-md-12">
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="請輸入姓名"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="請輸入Email"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="number"
                        name="number"
                        placeholder="請輸入手機"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-3">
                      <textarea
                        class="form-control"
                        name="message"
                        id="message"
                        rows="3"
                        placeholder="請輸入評價內容"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 text-right">
                    <button type="submit" class="btn btn-outline-primary">
                      送出評價
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['propsProducts', 'propsCategories'],
  data() {
    return {
      id: '',
      product: {},
      qty: 1,
      isLoading: false,
      users: [],
      reviews: [
        {
          1: '一分價錢一分貨，東西真心不錯，皮質很軟，剛穿上時會有點不舒服，但真的好看，不會磨腳。',
        },
        {
          2: '出乎意料的好，店家還送小禮物，服務態度也超棒，非常滿意。',
        },
        {
          3: '很漂亮!特地穿了一天才來給評價，又舒服又顯腳小，比名牌大廠的還要好，朋友看了也想買，祝店家生意興隆。',
        },
      ],
      isClick1: false,
      isClick2: false,
      isClick3: false,
      isClick4: false,
      isClick5: false,
    };
  },
  inject: ['emitter'],
  created() {
    const { id } = this.$route.params;
    this.id = id;
    this.getProduct();
    this.getUser();
  },
  watch: {
    // * 監聽 $router id 值變化後，使用 $router.go(0) 重新刷新頁面
    $route() {
      this.id = this.$route.params.id;
      this.$router.go(0);
      this.getPorduct();
    },
  },
  methods: {
    changeStar() {

    },
    getUser() {
      const url = 'https://randomuser.me/api/?results=3';
      this.$http.get(url).then((res) => {
        this.users = res.data.results;
        console.log(this.users);
      });
    },
    getProduct() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.emitter.emit('update-cart');
          this.product = res.data.product;
          console.log(this.$router);
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
        }
      });
    },
    addCart(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: id,
        qty: this.qty,
      };
      this.$http.post(url, { data }).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          this.emitter.emit('update-cart');
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
        }
      });
    },
  },
};
</script>
