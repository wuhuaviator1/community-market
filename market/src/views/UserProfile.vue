<template>
    <Navbar />
    <section id="body">
        <div id="color" class="container bootstrap snippet">
            <!-- <div class="row">
                <div class="col-sm-10"><h1>User name</h1></div>
                <div class="col-sm-2"><a href="/users" class="pull-right"><img title="profile image" class="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"></a></div>
            </div> -->
            <div class="row">
                <div class="col-sm-3"><!--left col-->
                    

                <div class="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">
                    <h6>Upload a different photo...</h6>
                    <input type="file" class="text-center center-block file-upload">
                </div>
                
                </div><!--/col-3-->
                <div class="col-sm-9">
                    
                <div class="tab-content">
                    <div class="tab-pane active" id="home">
                        <hr>
                        <form class="form" action="##" method="post" id="registrationForm">
                            <div class="form-group">
                                
                                <div class="col-xs-6">
                                    <label for="first_name"><h4>First name</h4></label>
                                    <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any.">
                                </div>
                            </div>
                            <div class="form-group">
                                
                                <div class="col-xs-6">
                                    <label for="last_name"><h4>Last name</h4></label>
                                    <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any.">
                                </div>
                            </div>
                
                            <div class="form-group">
                                
                                <div class="col-xs-6">
                                    <label for="phone"><h4>Phone</h4></label>
                                    <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any.">
                                </div>
                            </div>
                
                            <div class="form-group">
                                <div class="col-xs-6">
                                    <label for="email"><h4>Email</h4></label>
                                    <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email.">
                                </div>
                            </div>
                            <div class="form-group">
                                
                                <div class="col-xs-6">
                                    <label for="location"><h4>Address</h4></label>
                                    <input type="text" class="form-control" id="location" placeholder="somewhere" title="enter a location">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                        <br>
                                        <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                                        <button id="Reset" class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                                    </div>
                            </div>
                        </form>
                    
                        <hr>
                    
                    </div><!--/tab-pane-->
                </div><!--/tab-content-->

                </div><!--/col-9-->
            </div><!--/row-->
        </div>
    </section>
    <Footer />    
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import Footer from '@/components/Footer.vue';
    export default {
        name: 'UserProfile',
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
            // 添加一个新的数据属性
            userMessage: ''
            }
        }
    }
</script>


<style>
    #color{
        background-color:black;
    }

    .text-center h6{
        color:white;
    }

    .col-xs-6{
        padding-top:10px;
    }

    .col-xs-6 h4{
        color:white;
    }

    #Reset{
        color:white;
    }

    #body{
        background-color: black;
    }
</style>