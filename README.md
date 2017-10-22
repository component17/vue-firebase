## Warning! This module version ALFA!

> # Dependencies
> * **vue-router** 
> * **firebase**

## Install

### Step 1
`npm install vue-firebase --save`   
or  
`yarn add vue-firebase`

### Step 2

add `main.js`

```
import * as firebase from "firebase";       
import VueFirebase from './plugins/vue-firebase/index'

```

```$xslt
// Config firebase project
const FBCONFIG = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
};

Vue.use(VueFirebase, {firebase: firebase, config: FBCONFIG});
```


## Component Injections

`this.$firebase` The firebase instance.

## Auth

Add define some routes meta

```$xslt
    {
        path: '/',
        name: 'Hello',
        component: HelloWorld,
        meta: { requiresAuth: false }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard,
        meta: { requiresAuth: true, redirect: "/" }
    }
```