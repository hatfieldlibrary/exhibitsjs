
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
                startPage: '/assets/html/home.html',
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
                startPage: '/assets/html/startPainting.html',
                type: 'text',
                secondaryNav: [
                    {
                        section: {
                            title: 'William Merritt Chase Talk',
                            type: 'text',
                            html: '/assets/html/sections/chaseTalk.html'
                        }
                    },
                    {
                        section: {
                            title: 'Self-Portrait of William Merritt Chase',
                            type: 'image',
                            imageTitle: 'Self-Portrait 2',
                            description: 'oil on canvas, William Merritt Chase, artist.',
                            imageFileName: 'AMICO_DETROIT_1039543998'
                        }
                    },
                    {
                        section: {
                            title: 'Studio',
                            type: 'image',
                            imageTitle: 'Studio Interior',
                            description: 'William Merritt Chase, artist, ca 1882.',
                            imageFileName: 'Chase_Studio_Interior'
                        }
                    },
                    {
                        section: {
                            title: 'Portrait of Chase\'s Studio',
                            type: 'image',
                            imageTitle: 'William Merritt Chase\'s Painting Class',
                            description: 'Art Students League New York, 1891-92, ca. 1882.',
                            imageFileName: 'Chase_Painting_Class'
                        }
                    },
                    {
                        section: {
                            title: 'Portrait of Myra Wiggins Studio',
                            type: 'image',
                            imageTitle: 'Corner of My Studio 2',
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
                startPage: '/assets/html/startPhotography.html',
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
                                    imageFileName: '',
                                    description: 'Page one'
                                },
                                {
                                    imageFileName: '',
                                    description: 'Page two'
                                },
                                {
                                    imageFileName: '',
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
                startPage: '/assets/html/startPoetry.html',
                type: 'text',
                secondaryNav: [
                    {
                        section: {
                            title: 'Immanuel',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'In Holland',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'My Sweetheart',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'The Lost Butterfly',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'The Star',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Two Feasts',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Whistling Swan',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Youth\'s Flower Field',
                            type: 'text',
                            html: ''
                        }
                    }
                ]
            }
        },
        {
            section: {


                name: {
                    label: 'Travel',
                    title: 'Travel Letters: 1904 and 1954'
                },
                startPage: '/assets/html/startTravel.html',
                type: 'text',
                secondaryNav: [
                    {
                        section: {
                            title: 'Constantinople and Ephesus, 1904',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Galilee, 1904',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Tiberia and the Sea of Galilee, 1904',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Pyramids and Bazaars, 1904',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Saint Peter\’s, 1904',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Myra to Fred Wiggins, February 18, 1954',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Myra to Fred Wiggins and family, March 18, 1954',
                            type: 'text',
                            html: ''
                        }
                    },
                    {
                        section: {
                            title: 'Wiggins Family Christmas Letter, 1954',
                            type: 'text',
                            html: ''
                        }
                    }
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



