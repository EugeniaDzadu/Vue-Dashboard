<script setup>

</script>

<template>
    <div class="container-fluid position-relative d-flex p-0">
        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <Router-link href="/" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>DarkPan</h3>
                </Router-link>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <Router-link href="/" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</Router-link>
                    <div class="nav-item dropdown">
                        <Router-link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</Router-link>
                        <div class="dropdown-menu bg-transparent border-0">
                            <Router-link href="/button" class="dropdown-item">Buttons</Router-link>
                            <Router-link href="typography.html" class="dropdown-item">Typography</Router-link>
                            <Router-link href="/element" class="dropdown-item">Other Elements</Router-link>
                        </div>
                    </div>
                    <Router-link href="/widget" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</Router-link>
                    <Router-link href="/forms" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</Router-link>
                    <Router-link href="/table" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</Router-link>
                    <Router-link href="/chart" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</Router-link>
                    <div class="nav-item dropdown">
                        <Router-link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</Router-link>
                        <div class="dropdown-menu bg-transparent border-0">
                            <Router-link href="/sign-in" class="dropdown-item">Sign In</Router-link>
                            <Router-link href="/sign-up" class="dropdown-item">Sign Up</Router-link>
                            <Router-link href="404.html" class="dropdown-item">404 Error</Router-link>
                            <Router-link href="blank.html" class="dropdown-item">Blank Page</Router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <!-- Sidebar End -->
        
    </div>
</template>

<style>
    
</style>