/* Setup Rounting For All Pages */
propertyApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/home");
    $stateProvider

    // Dashboard
    
    //Added by Tanvir

    .state('home', {
        url: "/home",
        templateUrl: "layouts/home.html",
        data: {pageTitle: 'Home'},
        controller: "HomeController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'propertyApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    'ng-asset/HomeController.js'
                    ]
                });
            }]
        }
    })


    .state('aboutUs', {
        url: "/about",
        templateUrl: "layouts/aboutUs.html",
        data: {pageTitle: 'About Us'},
        controller: "AboutUsController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'propertyApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    'ng-asset/AboutUsController.js'
                    ]
                });
            }]
        }
    })
    .state('contactUs', {
        url: "/contact",
        templateUrl: "layouts/contactUs.html",
        data: {pageTitle: 'Contact Us'},
        controller: "ContactUsController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'propertyApp',
                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                    files: [
                    'ng-asset/ContactUsController.js'
                    ]
                });
            }]
        }
    })

}]);