<template>
  <div>
    <div>
      <script
        data-ad-client="ca-pub-8159459534545926"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </div>
    <div :class="classNames">
      <ins
        :className="adsbygoogle"
        :style="{ display: 'block' }"
        :data-ad-client="googleAdId"
        :data-ad-slot="slot"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleAd",
  props: {
    timeout: Number,
    classNames: String,
    slot: String,
  },
  data() {
    return {
      googleInit: null,
      googleAdId: "ca-pub-yourGoogleAdId",
    };
  },
  mounted() {
    let timeout = 200;
    if (this.timeout) timeout = this.timeout;
    this.googleInit = setTimeout(() => {
      if (typeof window !== "undefined")
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  },
  destroyed() {
    if (this.googleInit) clearTimeout(this.googleInit);
  },
};
</script>

