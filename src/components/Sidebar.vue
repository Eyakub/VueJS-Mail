<template>
    <aside class="sm-side">
        <div class="user-head">
            <img src="../assets/images/profile.jpg" alt="">
            <div class="user-name">
                <h5>Eyakub Sorkar</h5>
                <span class="email-address">eyakubsorkar@gmail.com</span>
            </div>
        </div>

        <ul class="inbox-nav">
            <li class="{ active: activeView == 'app-inbox'}">
                <a href="#" @click.prevent="navigate('app-inbox', 'Inbox')">
                    <i class="fa fa-inbox"></i>Inbox
                    <span class="badge badge-danger float-right">?</span>
                </a>
            </li>

            <li class="{ active: activeView == 'app-sent'}">
                <a href="#" @click.prevent="navigate('app-sent', 'Sent')">
                    <i class="fa fa-envelope-o"></i>Sent
                    <span class="badge badge-primary float-right">?</span>
                </a>
            </li>

            <li class="{ active: activeView == 'app-important'}">
                <a href="#" @click.prevent="navigate('app-important', 'Important')">
                    <i class="fa fa-bookmark-o"></i>Important
                    <span class="badge badge-warning float-right">?</span>
                </a>
            </li>

            <li>
                <a href="#" @click.prevent="navigate('app-trash', 'Trash')">
                    <i class="fa fa-trash-o"></i>Trash
                    <span class="badge badge-info float-right">?</span>
                </a>
            </li>
        </ul>


    </aside>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    created(){
        eventBus.$on('changeView', (data)=>{
            this.activeView = data.tag;
        });
    },
    data() {
        return {
            activeView: 'app-index',
        };
    },

     methods: {
         navigate(newView, title){
            eventBus.$emit('changeView', {
                tag: newView,
                title: title,
            });
        }
     }
}
</script>