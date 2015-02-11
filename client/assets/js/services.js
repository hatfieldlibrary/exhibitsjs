
'use strict';

var exhibitServices  = angular.module('exhibitServices', []);

exhibitServices.factory('exhibitLayoutFactory', function() {


    // layout model  -- you can define exhibit content and structure here.

    var layout = [

        {
            section: {

                name: {
                    label: 'Home',
                    title: ''
                },
                startPage: 'assets/html/home.html',
                type: 'text',
                secondaryNav: []

            }
        },
        {
            section: {

                name: {
                    label: 'Painting',
                    title: 'Painting and the Influence of William Merritt Chase'
                },
                startPage: 'assets/html/startPainting.html',
                type: 'text',
                secondaryNav: [
                    {
                        section: {
                            title: 'William Merritt Chase Talk',
                            type: 'text',
                            html: 'assets/html/sections/chaseTalk.html'
                        }
                    },
                    {
                        section: {
                            title: 'Self-Portrait of William Merritt Chase',
                            type: 'image',
                            description: 'oil on canvas, William Merritt Chase, artist.',
                            imageFileName: 'AMICO_DETROIT_1039543998'
                        }
                    },
                    {
                        section: {
                            type: 'image',
                            title: 'Studio Interior',
                            description: 'William Merritt Chase, artist, ca 1882.',
                            imageFileName: 'Chase_Studio_Interior'
                        }
                    },
                    {
                        section: {
                            type: 'image',
                            title: 'William Merritt Chase\'s Painting Class',
                            description: 'Art Students League New York, 1891-92, Myra Albert, photographer.',
                            imageFileName: 'Chase_Painting_Class'
                        }
                    },
                    {
                        section: {
                            type: 'image',
                            title: 'Corner of My Studio 2',
                            description: 'Myra Albert Wiggins, artist.',
                            imageFileName: 'Corner_of_my_studio'
                        }
                    }
                ]
            }

        },
        {

            section: {


                name: {
                    label: 'Photography',
                    title: 'Photography and the Camera Club of New York'
                },
                startPage: 'assets/html/startPhotography.html',
                type: 'text',
                secondaryNav: [
                    {
                        section: {
                            title: 'Amateur Photography Through Women\'s Eyes',
                            type: 'image',
                            imageTitle: '',
                            description: 'Page one',
                            imageFileName: 'Amateur_Photography'
                        }
                    },
                    {
                        section: {
                            title: 'Genre Photography',
                            type: 'pagesArray',
                            imageArray: [
                                {
                                    imageFileName: 'Bausch-and-Lomb1',
                                    description: 'Page one'
                                },
                                {
                                    imageFileName: 'Bausch-and-Lomb2',
                                    description: 'Page two'
                                },
                                {
                                    imageFileName: 'Bausch-and-Lomb3',
                                    description: 'Page three'
                                }

                            ]
                        }
                    },
                    {
                        section: {
                            title: 'Trials and Triumphs of an Amateur Photographer',
                            type: 'pagesArray',
                            imageArray: [
                                {
                                    imageFileName: 'Trials_pg_481',
                                    description: 'Page one'
                                },
                                {
                                    imageFileName: 'Trials_pg_482',
                                    description: 'Page two'
                                },
                                {
                                    imageFileName: 'Trials_pg_483',
                                    description: 'Page three'
                                },
                                {
                                    imageFileName: 'Trials_pg_484',
                                    description: 'Page four'
                                },
                                {
                                    imageFileName: 'Trials_pg_485',
                                    description: 'Page five'
                                }

                            ]
                        }
                    }
                ]
            }
        },
        {

            section: {


                name: {
                    label: 'Poetry',
                    title: 'Poetry'
                },
                startPage: 'assets/html/startPoetry.html',
                type: 'text',
                secondaryNav: [
                    {
                        section: {
                            type: 'image',
                            title: 'Immanuel',
                            description: 'poem by Myra Wiggins',
                            imageFileName: 'Wiggins_Immanuel'
                        }
                    },
                    {
                        section: {
                            title: 'My Sweetheart',
                            type: 'pagesArray',
                            imageArray: [
                                {
                                    imageFileName: 'Wiggins_My-Sweetheart',
                                    description: 'Page one'
                                },
                                {
                                    imageFileName: 'Wiggins_My-Sweetheart_back',
                                    description: 'Page two'
                                },

                            ]
                        }
                    },
                    {
                        section: {
                            type: 'image',
                            title: 'Spring\'s Resurrection',
                            description: 'poem by Myra Wiggins',
                            imageFileName: 'Wiggins_Spring\'s-Resurrection'
                        }
                    },
                    {
                        section: {
                            title: 'The Lost Butterfly',
                            type: 'pagesArray',
                            imageArray: [
                                {
                                    imageFileName: 'Wiggins_The-Lost-Butterfly',
                                    description: 'Page one'
                                },
                                {
                                    imageFileName: 'Wiggins_The-Lost-Butterfly_back',
                                    description: 'Page two'
                                },
                            ]
                        }

                    },
                    {
                        section: {
                            type: 'image',
                            title: 'The Star',
                            description: 'poem by Myra Wiggins',
                            imageFileName: 'Wiggins_The-Star'
                        }
                    },
                    {
                        section: {
                            type: 'image',
                            title: 'Two Feasts',
                            description: 'poem by Myra Wiggins',
                            imageFileName: 'Wiggins_Two-Feasts'
                        }
                    },
                    {
                        section: {
                            type: 'image',
                            title: 'Whistling Swan',
                            description: 'poem by Myra Wiggins',
                            imageFileName: 'Wiggins_Whistling-Swan'
                        }
                    },
                    {
                        section: {
                            title: 'Youth\'s Flowering Field',
                            type: 'pagesArray',
                            imageArray: [
                                {
                                    imageFileName: 'Wiggins_Youth\'s-Flowering-Field',
                                    description: 'Page one'
                                },
                                {
                                    imageFileName: 'Wiggins_Youth\'s-Flowering-Field_back',
                                    description: 'Page two'
                                },
                            ]
                        }
                    }
                ]
            }
        },
        {
            section: {


                name: {
                    label: 'Travel',
                    title: 'Travel Letters'
                },
                startPage: 'assets/html/startTravel.html',
                type: 'text',
                secondaryNav: [
                    {
                        section: {
                            title: 'Constantinople and Ephesus, 1904',
                            type: 'text',
                            html: 'assets/html/sections/constantinople.html'
                        }
                    },
                    {
                        section: {
                            title: 'Galilee, 1904',
                            type: 'text',
                            html: 'assets/html/sections/galilee.html'
                        }
                    },
                    {
                        section: {
                            title: 'Tiberias and the Sea of Galilee, 1904',
                            type: 'text',
                            html: 'assets/html/sections/tiberias.html'
                        }
                    },
                    {
                        section: {
                            title: 'Pyramids and Bazaars, 1904',
                            type: 'text',
                            html: 'assets/html/sections/pyramids.html'
                        }
                    },
                    {
                        section: {
                            title: 'Saint Peter\’s, 1904',
                            type: 'text',
                            html: 'assets/html/sections/stpeters.html'
                        }
                    },
                    {
                        section: {
                            title: 'Coliseum, 1904',
                            type: 'text',
                            html: 'assets/html/sections/coliseum.html'
                        }
                    },
                ]
            }
        }
    ];



    // End of the exhibit layout section.
    // Do not edit beyond this point unless you know what you are doing!


    var _imageFileName;

    var _currentPage;

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

    var _sectionPrimary;

    var _imageDescription;

    var service = {};

    service.context = {

        primaryNavigation: {
            contentCategory: '',
            selectedItem:'',
            section: ''
        },
        secondaryNavigation: {
            contentType: '',
            contentCategory: '',
            pageIndex: ''
        },
        pageElements: {
            imageFileName: '',
            title: '',
            imageDescription: '',
            html: '',
            imageArray: '',
            contentType: ''
        }

    };

    service.setPageIndex = function(position) {

        _pageIndex = position;
        if (layout[_selectedItemPrimary].section.secondaryNav[position] !== undefined) {
            _contentType = layout[_selectedItemPrimary].section.secondaryNav[position].section.type;
        }
        if (_contentType === 'text') {
            _contentCategory = 'textinfo';
        } else {
            _contentCategory = 'imageinfo';
        }
        service.context.secondaryNavigation.contentType = _contentType;
        service.context.secondaryNavigation.contentCategory = _contentCategory;
        service.context.secondaryNavigation.pageIndex = _pageIndex;

    };

    service.setCurrentPage = function(position) {

        _imageFileName = layout[_selectedItemPrimary].section.secondaryNav[position].section.imageFileName;
        _currentPage =  layout[_selectedItemPrimary].section.secondaryNav[position].section.html;
        _imageTitle = layout[_selectedItemPrimary].section.secondaryNav[position].section.title;
        _imageDescription =  layout[_selectedItemPrimary].section.secondaryNav[position].section.description;
        _contentType =  layout[_selectedItemPrimary].section.secondaryNav[position].section.type;
        if (layout[_selectedItemPrimary].section.secondaryNav[position].section.imageArray != null) {
            _imageArray = layout[_selectedItemPrimary].section.secondaryNav[position].section.imageArray;
        } else {
            _imageArray = [];
        }
        service.context.pageElements.html = _currentPage;
        service.context.pageElements.imageArray = _imageArray;
        service.context.pageElements.imageFileName = _imageFileName;
        service.context.pageElements.title = _imageTitle;
        service.context.pageElements.imageDescription = _imageDescription;
        service.context.pageElements.contentType = _contentType;

    };

    service.updateSelectedItem = function(position) {

        _selectedItemPrimary = position;
        _sectionPrimary = layout[position];
        _contentTypePrimary = layout[position].section.type;
        if (_contentType == 'text') {
            _contentCategoryPrimary = 'text';
        }  else {
            _contentCategoryPrimary = 'image';
        }
        _secondaryNav = layout[position].section.secondaryNav;
        _currentPagePrimary = layout[position].section.startPage;
        _currentTitlePrimary = layout[position].section.name.title;
        service.context.pageElements.contentType = _contentTypePrimary;
        service.context.pageElements.title = _currentTitlePrimary;
        service.context.pageElements.html = _currentPagePrimary;
        service.context.primaryNavigation.contentCategory = _contentCategoryPrimary;
        service.context.primaryNavigation.selectedItem = _selectedItemPrimary;
        service.context.primaryNavigation.section = _sectionPrimary;

    };

    service.layout = layout;

    return service;


});



