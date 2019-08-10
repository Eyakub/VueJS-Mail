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
            <li class="active">
                <a href="#">
                    <i class="fa fa-inbox"></i>Inbox
                    <span class="badge badge-danger float-right">?</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="fa fa-envelope-o"></i>Sent
                    <span class="badge badge-primary float-right">?</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="fa fa-bookmark-o"></i>Important
                    <span class="badge badge-warning float-right">?</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="fa fa-trash-o"></i>Trash
                    <span class="badge badge-info float-right">?</span>
                </a>
            </li>
        </ul>


    </aside>
</template>

<script>
export default {
    
}
</script>