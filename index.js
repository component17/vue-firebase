
let Plugin = {};

Plugin.install = function (Vue, options) {

     Vue.prototype.$firebase = test(options);

    Vue.mixin({
        // Anything added to a mixin will be injected into all components.
        // In this case, the mounted() method runs when the component is added to the DOM.
        beforeCreate() {
            this.$router.beforeEach((to, from, next) => {
                if (to.matched.some(record => record.meta.requiresAuth)) {

                    // этот путь требует авторизации, проверяем залогинен ли
                    // пользователь, и если нет, перенаправляем на страницу логина

                    this.$firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                            next()
                        } else {
                            next({
                                path: to.meta.redirect
                            })
                        }
                    });

                } else {
                    next() // всегда так или иначе нужно вызвать next()!
                }
            })

        }
    });

};

function test(opt) {
    let fb = opt.firebase;
    let initFb = fb.initializeApp(opt.config);
    return initFb;
}

export default Plugin;