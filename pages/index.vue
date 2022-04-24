<template>
  <div>
    <main>
      <h1>Nuxt Auth</h1>
    </main>

    <section>
      <h2>Actual stack:</h2>
      <ul>
        <li>
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.61953 0.541973C6.19925 -0.180658 5.14857 -0.180658 4.72829 0.541973L0.147918 8.41756C-0.272359 9.14021 0.252986 10.0435 1.09354 10.0435H4.66924C4.31007 9.7296 4.17705 9.18657 4.44886 8.72066L7.91783 2.77429L6.61953 0.541973Z"
              fill="#80EEC0"
            />
            <path
              d="M9.52177 2.26948C9.86959 1.67824 10.7391 1.67824 11.0869 2.26948L14.8776 8.71313C15.2254 9.30438 14.7907 10.0434 14.095 10.0434H6.51371C5.81808 10.0434 5.3833 9.30438 5.73112 8.71313L9.52177 2.26948Z"
              fill="#00DC82"
            />
          </svg>

          Nuxt
        </li>
        <li>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1347 4.88273C10.1347 8.01172 8.81947 9.7652 6.46414 9.7652C5.06326 9.7652 4.03137 9.09463 3.59313 7.98582H3.52441V13.3546H0V0.137445H3.53313V1.84811H3.59339C4.04908 0.687754 5.05507 0 6.42159 0C8.81101 0 10.1347 1.74502 10.1347 4.88273V4.88273ZM6.52414 4.88273C6.52414 3.56749 5.94 2.71639 5.02018 2.71639C4.10035 2.71639 3.51621 3.56749 3.50722 4.89119C3.51595 6.22335 4.09137 7.04881 5.02018 7.04881C5.94846 7.04881 6.52414 6.20643 6.52414 4.88273V4.88273ZM11.4317 8.00881C11.4317 7.02238 12.2294 6.22467 13.2159 6.22467C14.2023 6.22467 15 7.02238 15 8.00881C15 8.99524 14.2023 9.79295 13.2159 9.79295C12.2294 9.79295 11.4317 8.99524 11.4317 8.00881Z"
              fill="white"
            />
          </svg>
          Pico css
        </li>
        <li>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6407 0.117188H4.78201V5.06027H9.63296C9.80578 5.06027 9.94598 5.20047 9.94598 5.37329V10.1573H14.9537V0.43078C14.9539 0.347663 14.921 0.267898 14.8623 0.209071C14.8035 0.150245 14.7238 0.117188 14.6407 0.117188Z"
              fill="#8E75FF"
            />
            <path
              opacity="0.405"
              d="M4.78144 0.117188V5.06027H0.156523C0.0929703 5.06016 0.0357714 5.0217 0.0116936 4.96288C-0.0123842 4.90407 0.00142191 4.83653 0.0466511 4.79189L4.78144 0.117188ZM10.2127 14.8371C10.1676 14.8814 10.1005 14.8943 10.0423 14.8699C9.98403 14.8456 9.94609 14.7887 9.94598 14.7256V10.1573H14.9537L10.2127 14.8366V14.8371Z"
              fill="#8E75FF"
            />
            <path
              opacity="0.405"
              d="M4.78143 5.0603H9.78975C9.87559 5.0603 9.94598 5.13012 9.94598 5.21653V10.1573H5.09503C4.92215 10.1573 4.78201 10.0172 4.78201 9.8443V5.0603H4.78143Z"
              fill="#8E75FF"
            />
          </svg>
          Strapi
        </li>
      </ul>

      <div>
        <small>
          Visit
          <a href="https://nuxtjs.org/docs/get-started/installation"
            >nuxtjs.org/docs</a
          >
          to read the documentation</small
        >
      </div>
      <div>
        <small>
          Visit <a href="https://picocss.com/docs/">picocss.com/docs</a> to read
          the documentation</small
        >
      </div>
      <div>
        <small>
          Visit
          <a
            href="https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html"
            >docs.strapi.io/</a
          >
          to read the documentation</small
        >
      </div>
    </section>

    <section>
      <h2>Todo:</h2>
      <ul>
        <li>Secure more and error handling login</li>
        <li>Store token in localstorage or cookie</li>
        <li>protect login and signup routes</li>
        <li>User register</li>
        <li>User logout</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
main {
  margin-top: 3rem;
}
li svg {
  margin-right: 0.3rem;
}
</style>
