<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24">
        <blockquote class="text-warning" style="font-size: 14px">
          【腾讯云】云服务器、云数据库、COS、CDN、短信等云产品特惠热卖中
          <el-link href="https://curl.qcloud.com/XdOict8l" type="primary" target="_blank">☛☛点我进入☚☚</el-link>
          <br />
          <el-link
            href="https://cloud.tencent.com/act/cps/redirect?redirect=2446&cps_key=d9acf994371247fbae0804667254d243&from=console"
            type="primary"
            target="_blank">
            https://cloud.tencent.com/act/cps/redirect?redirect=2446&cps_key=d9acf994371247fbae0804667254d243&from=console
          </el-link>
          <br />
          【腾讯云】2核2G云服务器新老同享 99元/年，续费同价，云服务器3年机/5年机限时抢购，低至 2.5折
          <el-link href="https://curl.qcloud.com/RFtsjlEZ" type="primary" target="_blank">☛☛点我进入☚☚</el-link>
          <br />
          <el-link
            href="https://cloud.tencent.com/act/cps/redirect?redirect=6150&cps_key=d9acf994371247fbae0804667254d243&from=console"
            type="primary"
            target="_blank">
            https://cloud.tencent.com/act/cps/redirect?redirect=6150&cps_key=d9acf994371247fbae0804667254d243&from=console
          </el-link>
        </blockquote>

        <hr />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>每日饭菜</h2>
        <p>
          毕业了，好不容易找到了一份Java相关的工作，奈何公司技术太老，学不到东西，故想开发一款拥有常用技术的网站来保持自己的竞争力。
          想做这个系统也完全是因为自己平时老做饭，业务可能比较熟悉，然后也想解决自己每天还要思考做啥菜的痛。
          目前还是Java小白阶段，此项目为学习向产物，很多实现内容都是从若依框架学习而来。
        </p>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
        <p>
          <el-tag type="danger">&yen;免费开源</el-tag>
        </p>
        <p>
          <el-button
            icon="el-icon-s-home"
            plain
            @click="goTarget('https://github.com/insectmk/daily-eats-web-front')">访问前端代码</el-button>
          <el-button
            type="primary"
            icon="el-icon-cloudy"
            plain
            @click="goTarget('https://github.com/insectmk/daily-eats-web')">访问后端代码</el-button>
          <el-button
            type="primary"
            icon="el-icon-cloudy"
            plain
            @click="goTarget('https://vue.ruoyi.vip/')">访问若依</el-button>
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>技术选型</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <h4>后端技术</h4>
            <ul>
              <li>Spring-Boot</li>
              <li>Spring-Security</li>
              <li>JWT</li>
              <li>MyBatis-Plus</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue3</li>
              <li>Vuex</li>
              <li>Element-Plus</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      // 版本号
      version: "0.0.1"
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

