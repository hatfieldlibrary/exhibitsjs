
'use strict';

var exhibitServices  = angular.module('exhibitServices', []);

exhibitServices.factory('exhibitLayoutFactory', function($http) {

    var layout = { components: [] };

    var _imageFileName;

    var _currentHtmlPage;

    var _imageTitle;

    var _imageArray;

    var _contentType;

    var _secondaryNav;

    var _pageIndex;

    var  _contentCategory;

    var  _contentCategoryPrimary;

    var  _currentTitlePrimary;

    var _contentTypePrimary;

    var  _selectedItemPrimary;

    var _currentPagePrimary;

    var _description;

    var _date;

    var _creator;

    var _citationType;

    var _imageAlign;

    var _showTitle;

    var service = {};

    /*
     * context keys:
     *
     * primaryNavigation - global navigation options
     * secondaryNavigation - section-level navigation
     * pageElements - page content, including the page type used for template selection
     *
     *   contentCategory - used in directives for animation settings (left, right)
     *   selectedItem - index of the selected primary navigation option
     *   contentType - used to select templates (text, image, pageArray)
     *   pageIndex - index of the selected secondary navigation option
     *   imageFileName - image file name (omit file extension)
     *   title - title of the current section
     *   html - html page template
     *   imageArray - array of images for page turner layout.componentss
     *
     */

    service.context = {

        primaryNavigation: {
            contentCategory: '',
            selectedItem:'',
            imageFileName: '',
            imageAlign: '',
            showTitle: ''
        },
        secondaryNavigation: {
            contentType: '',
            contentCategory: '',
            pageIndex: ''
        },
        pageElements: {
            imageFileName: '',
            title: '',
            creator: '',
            date: '',
            description: '',
            citationType: '',
            html: '',
            imageArray: '',
            imageAlign: '',
            contentType: ''
        }

    };

    // Retrieves the exhibit json file and sets layout JSON object.
    // Returns a reference to the layout object to the controller.
    service.init = function(callback) {

        $http.get('assets/layout/exhibit.json').
            success(function (data, status, headers, config) {

                layout.components = data;
                callback(layout);

            }).
            error(function (data, status, headers, config) {

                console.log('Error retrieving the exhibit layout json: ' + status);

            });

    };

    // Sets the secondary navigation options
    service.setPageIndex = function(position) {

        _pageIndex = position;
        if (layout.components[_selectedItemPrimary].section.secondaryNav[position] !== undefined) {
            _contentType = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.type;
        }
        if (_contentType === 'text') {
            _contentCategory = 'textinfo';
        } else {
            _contentCategory = 'imageinfo';
        }

        // secondary navigation
        service.context.secondaryNavigation.contentType = _contentType;
        service.context.secondaryNavigation.contentCategory = _contentCategory;
        service.context.secondaryNavigation.pageIndex = _pageIndex;

    };

    // Sets page-level information
    service.setCurrentPage = function(position) {

        _imageFileName = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.imageFileName;
        _currentHtmlPage =  layout.components[_selectedItemPrimary].section.secondaryNav[position].section.html;
        _imageTitle = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.title;
        _description =  layout.components[_selectedItemPrimary].section.secondaryNav[position].section.description;
        _contentType =  layout.components[_selectedItemPrimary].section.secondaryNav[position].section.type;
        _date = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.date;
        _creator = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.creator;
        _citationType =  layout.components[_selectedItemPrimary].section.secondaryNav[position].section.citationType;
        _imageAlign = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.imageAlign;
        _showTitle = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.showTitle;
        if (layout.components[_selectedItemPrimary].section.secondaryNav[position].section.imageArray != null) {
            _imageArray = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.imageArray;
        } else {
            _imageArray = [];
        }
        if  (layout.components[_selectedItemPrimary].section.secondaryNav[position].section.imageAlign !== undefined) {
            _imageAlign = layout.components[_selectedItemPrimary].section.secondaryNav[position].section.imageAlign;
        }  else {
            _imageAlign = "left";
        }

        // page elements
        service.context.pageElements.html = _currentHtmlPage;
        service.context.pageElements.imageArray = _imageArray;
        service.context.pageElements.imageFileName = _imageFileName;
        service.context.pageElements.imageAlign = _imageAlign;
        service.context.pageElements.contentType = _contentType;
        service.context.pageElements.citationType = _citationType;
        service.context.pageElements.title = _imageTitle;
        service.context.pageElements.description = _description;
        service.context.pageElements.creator = _creator;
        service.context.pageElements.date = _date;
        service.context.pageElements.showTitle = _showTitle;



    };

    // sets the primary navigation option
    service.updateSelectedItem = function(position) {

        _selectedItemPrimary = position;
        _contentTypePrimary = layout.components[position].section.type;
        if (_contentType === 'text') {
            _contentCategoryPrimary = 'textinfo';
        }  else {
            _contentCategoryPrimary = 'imageinfo';
        }
        _secondaryNav = layout.components[position].section.secondaryNav;
        _currentPagePrimary = layout.components[position].section.startPage;
        _currentTitlePrimary = layout.components[position].section.name.title;
        _imageFileName = layout.components[position].section.imageFileName;
        _imageAlign = layout.components[position].section.imageAlign;
        _showTitle = layout.components[position].section.showTitle;


        // primary-level page elements
        service.context.pageElements.contentType = _contentTypePrimary;
        service.context.pageElements.title = _currentTitlePrimary;
        service.context.pageElements.html = _currentPagePrimary;
        service.context.pageElements.citationType = _citationType;
        service.context.pageElements.imageFileName = _imageFileName;
        service.context.pageElements.imageAlign = _imageAlign;
        service.context.pageElements.showTitle = _showTitle;




        // primary elements
        service.context.primaryNavigation.contentCategory = _contentCategoryPrimary;
        service.context.primaryNavigation.selectedItem = _selectedItemPrimary;


    };

    return service;

});



