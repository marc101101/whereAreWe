import {
  Http,
  Headers,
  Response
} from '@angular/http';
import {
  Injectable
} from '@angular/core';

@Injectable()
export class DataService {
  http: Http;
  map_style = [{
    "featureType": "landscape",
    "stylers": [{
      "saturation": -100
    }, {
      "lightness": 65
    }, {
      "visibility": "on"
    }]
  }, {
    "featureType": "poi",
    "stylers": [{
      "saturation": -100
    }, {
      "lightness": 51
    }, {
      "visibility": "simplified"
    }]
  }, {
    "featureType": "road.highway",
    "stylers": [{
      "saturation": -100
    }, {
      "visibility": "simplified"
    }]
  }, {
    "featureType": "road.arterial",
    "stylers": [{
      "saturation": -100
    }, {
      "lightness": 30
    }, {
      "visibility": "on"
    }]
  }, {
    "featureType": "road.local",
    "stylers": [{
      "saturation": -100
    }, {
      "lightness": 40
    }, {
      "visibility": "on"
    }]
  }, {
    "featureType": "transit",
    "stylers": [{
      "saturation": -100
    }, {
      "visibility": "simplified"
    }]
  }, {
    "featureType": "administrative.province",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
      "visibility": "on"
    }, {
      "lightness": -25
    }, {
      "saturation": -100
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "hue": "#ffff00"
    }, {
      "lightness": -25
    }, {
      "saturation": -97
    }]
  }];

  map_data = {
    "migration_data": [{
        "city": "Flensburg, Stadt",
        "geo_data": {
            "lat": 54.7937431,
            "country": "de",
            "lng": 9.4469964,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [3, 11, 1, 2, 0, 3],
        "sum_over_all": 20
    }, {
        "city": "Kiel, Landeshauptstadt",
        "geo_data": {
            "lat": 54.3232927,
            "country": "de",
            "lng": 10.1227651,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [15, 10, 9, 13, 14, 4],
        "sum_over_all": 65
    }, {
        "city": "Lübeck, Hansestadt",
        "geo_data": {
            "country": "de",
            "lat": 53.8654673,
            "lng": 10.6865593,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [4, 12, 2, 7, 7, 3],
        "sum_over_all": 35
    }, {
        "city": "Neumünster, Stadt",
        "geo_data": {
            "lat": 54.0729431,
            "country": "de",
            "lng": 9.9840158,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [1, 3, 0, 1, 0, 0],
        "sum_over_all": 5
    }, {
        "city": "Dithmarschen, Kreis",
        "geo_data": {
            "lat": 54.13279989999999,
            "country": "de",
            "lng": 9.1173702,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [4, 1, 1, 2, 1, 1],
        "sum_over_all": 10
    }, {
        "city": "Herzogtum Lauenburg, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Schleswig-Holstein",
            "lat": 53.570009,
            "lng": 10.6139507
        },
        "data_by_year": [3, 7, 1, 2, 2, 4],
        "sum_over_all": 19
    }, {
        "city": "Nordfriesland, Kreis",
        "geo_data": {
            "lat": 54.67602189999999,
            "country": "de",
            "lng": 8.9336322,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [1, 2, 1, 3, 6, 7],
        "sum_over_all": 20
    }, {
        "city": "Ostholstein, Kreis",
        "geo_data": {
            "lat": 54.1642033,
            "country": "de",
            "lng": 10.8504235,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [1, 1, 3, 2, 1, 3],
        "sum_over_all": 11
    }, {
        "city": "Pinneberg, Kreis",
        "geo_data": {
            "lat": 53.6545225,
            "country": "de",
            "lng": 9.7938212,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [5, 4, 2, 6, 3, 5],
        "sum_over_all": 25
    }, {
        "city": "Plön, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Schleswig-Holstein",
            "lat": 54.304115,
            "lng": 10.1295528
        },
        "data_by_year": [0, 3, 1, 0, 2, 1],
        "sum_over_all": 7
    }, {
        "city": "Rendsburg-Eckernfrde, Kreis",
        "geo_data": {
            "lat": 54.2952752,
            "country": "de",
            "lng": 9.846644399999999,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [1, 7, 5, 8, 5, 13],
        "sum_over_all": 39
    }, {
        "city": "Schleswig-Flensburg, Kreis",
        "geo_data": {
            "lat": 54.6298964,
            "country": "de",
            "lng": 9.5348609,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [4, 4, 3, 5, 0, 3],
        "sum_over_all": 19
    }, {
        "city": "Segeberg, Kreis",
        "geo_data": {
            "lat": 53.96130710000001,
            "country": "de",
            "lng": 10.1528422,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [0, 1, 2, 3, 2, 1],
        "sum_over_all": 9
    }, {
        "city": "Steinburg, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Schleswig-Holstein",
            "lat": 53.9248469,
            "lng": 9.5301743
        },
        "data_by_year": [0, 2, 1, 0, 4, 0],
        "sum_over_all": 7
    }, {
        "city": "Stormarn, Kreis",
        "geo_data": {
            "lat": 53.68589369999999,
            "country": "de",
            "lng": 10.2929854,
            "region": "Schleswig-Holstein"
        },
        "data_by_year": [4, 4, 6, 2, 5, 3],
        "sum_over_all": 24
    }, {
        "city": "Hamburg, Freie und Hansestadt",
        "geo_data": {
            "lat": 53.5510846,
            "country": "de",
            "lng": 9.9936819,
            "region": "Hamburg"
        },
        "data_by_year": [40, 59, 46, 51, 56, 44],
        "sum_over_all": 296
    }, {
        "city": "Braunschweig, Stadt",
        "geo_data": {
            "lat": 52.2688736,
            "country": "de",
            "lng": 10.5267696,
            "region": "Niedersachsen"
        },
        "data_by_year": [4, 14, 14, 16, 12, 15],
        "sum_over_all": 75
    }, {
        "city": "Salzgitter, Stadt",
        "geo_data": {
            "lat": 52.13786589999999,
            "country": "de",
            "lng": 10.3899127,
            "region": "Niedersachsen"
        },
        "data_by_year": [3, 7, 3, 2, 2, 0],
        "sum_over_all": 17
    }, {
        "city": "Wolfsburg, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Niedersachsen",
            "lat": 52.4226503,
            "lng": 10.7865461
        },
        "data_by_year": [0, 5, 4, 3, 3, 0],
        "sum_over_all": 15
    }, {
        "city": "Gifhorn, Landkreis",
        "geo_data": {
            "lat": 52.4809091,
            "country": "de",
            "lng": 10.5507829,
            "region": "Niedersachsen"
        },
        "data_by_year": [6, 2, 2, 3, 4, 3],
        "sum_over_all": 20
    }, {
        "city": "Gttingen, Landkreis",
        "geo_data": {
            "lat": 51.54128040000001,
            "country": "de",
            "lng": 9.915803499999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [29, 15, 22, 19, 56, 39],
        "sum_over_all": 180
    }, {
        "city": "Goslar, Landkreis",
        "geo_data": {
            "lat": 51.9059531,
            "country": "de",
            "lng": 10.4289963,
            "region": "Niedersachsen"
        },
        "data_by_year": [12, 5, 2, 0, 0, 2],
        "sum_over_all": 21
    }, {
        "city": "Helmstedt, Landkreis",
        "geo_data": {
            "lat": 52.22896600000001,
            "country": "de",
            "lng": 11.009544,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 0, 1, 1, 0, 1],
        "sum_over_all": 3
    }, {
        "city": "Northeim, Landkreis",
        "geo_data": {
            "lat": 51.7001785,
            "country": "de",
            "lng": 9.9959057,
            "region": "Niedersachsen"
        },
        "data_by_year": [3, 7, 1, 1, 1, 3],
        "sum_over_all": 16
    }, {
        "city": "Osterode am Harz, Landkreis",
        "geo_data": {
            "lat": 51.7293769,
            "country": "de",
            "lng": 10.2580311,
            "region": "Niedersachsen"
        },
        "data_by_year": [1, 0, 2, 1, 3, 1],
        "sum_over_all": 8
    }, {
        "city": "Peine, Landkreis",
        "geo_data": {
            "lat": 52.3204095,
            "country": "de",
            "lng": 10.243267,
            "region": "Niedersachsen"
        },
        "data_by_year": [1, 1, 1, 1, 1, 3],
        "sum_over_all": 8
    }, {
        "city": "Wolfenbüttel, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Niedersachsen",
            "lat": 52.16404130000001,
            "lng": 10.5408484
        },
        "data_by_year": [3, 4, 5, 5, 1, 1],
        "sum_over_all": 19
    },{
        "city": "Hannover",
        "geo_data": {
            "lat": 52.3758916,
            "country": "de",
            "lng": 9.732010400000002,
            "region": "Niedersachsen"
        },
        "data_by_year": [25, 21, 31, 26, 31, 34],
        "sum_over_all": 168
    }, {
        "city": "Diepholz, Landkreis",
        "geo_data": {
            "lat": 52.6056456,
            "country": "de",
            "lng": 8.3707878,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 1, 5, 2, 3, 2],
        "sum_over_all": 13
    }, {
        "city": "Hameln-Pyrmont, Landkreis",
        "geo_data": {
            "lat": 52.1165032,
            "country": "de",
            "lng": 9.3740065,
            "region": "Niedersachsen"
        },
        "data_by_year": [4, 5, 2, 1, 2, 5],
        "sum_over_all": 19
    }, {
        "city": "Hannover, Landkreis",
        "geo_data": {
            "lat": 52.3758916,
            "country": "de",
            "lng": 9.732010400000002,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Hildesheim, Landkreis",
        "geo_data": {
            "lat": 52.154778,
            "country": "de",
            "lng": 9.9579652,
            "region": "Niedersachsen"
        },
        "data_by_year": [2, 12, 7, 5, 13, 8],
        "sum_over_all": 47
    }, {
        "city": "Holzminden, Landkreis",
        "geo_data": {
            "lat": 51.8238111,
            "country": "de",
            "lng": 9.4558926,
            "region": "Niedersachsen"
        },
        "data_by_year": [2, 1, 0, 1, 2, 0],
        "sum_over_all": 6
    }, {
        "city": "Nienburg (Weser), Landkreis",
        "geo_data": {
            "lat": 52.6380924,
            "country": "de",
            "lng": 9.2084155,
            "region": "Niedersachsen"
        },
        "data_by_year": [4, 1, 0, 0, 1, 4],
        "sum_over_all": 10
    }, {
        "city": "Schaumburg, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Niedersachsen",
            "lat": 52.301088,
            "lng": 9.2076861
        },
        "data_by_year": [7, 0, 0, 1, 1, 4],
        "sum_over_all": 13
    }, {
        "city": "Celle, Landkreis",
        "geo_data": {
            "lat": 52.6175963,
            "country": "de",
            "lng": 10.0628514,
            "region": "Niedersachsen"
        },
        "data_by_year": [3, 4, 2, 4, 2, 4],
        "sum_over_all": 19
    }, {
        "city": "Cuxhaven, Landkreis",
        "geo_data": {
            "lat": 53.859336,
            "country": "de",
            "lng": 8.6879057,
            "region": "Niedersachsen"
        },
        "data_by_year": [2, 5, 0, 4, 2, 1],
        "sum_over_all": 14
    }, {
        "city": "Harburg, Landkreis",
        "geo_data": {
            "lat": 53.4607681,
            "country": "de",
            "lng": 9.9835844,
            "region": "Hamburg"
        },
        "data_by_year": [1, 3, 2, 4, 4, 2],
        "sum_over_all": 16
    }, {
        "city": "Lüchow-Dannenberg, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Niedersachsen",
            "lat": 53.000263,
            "lng": 11.1144996
        },
        "data_by_year": [0, 2, 1, 1, 0, 1],
        "sum_over_all": 5
    }, {
        "city": "Lüneburg, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Niedersachsen",
            "lat": 53.2464214,
            "lng": 10.4115179
        },
        "data_by_year": [2, 13, 6, 4, 6, 6],
        "sum_over_all": 37
    }, {
        "city": "Osterholz, Landkreis",
        "geo_data": {
            "lat": 53.2796695,
            "country": "de",
            "lng": 8.834920499999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [1, 1, 1, 0, 4, 3],
        "sum_over_all": 10
    }, {
        "city": "Rotenburg (Wmme), Landkreis",
        "geo_data": {
            "lat": 53.0852034,
            "country": "de",
            "lng": 9.386889300000002,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 1, 4, 4, 6, 1],
        "sum_over_all": 16
    }, {
        "city": "Soltau-Fallingbostel, Landkreis",
        "geo_data": {
            "lat": 53.0664981,
            "country": "de",
            "lng": 9.882524799999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [3, 3, 3, 2, 2, 4],
        "sum_over_all": 17
    }, {
        "city": "Stade, Landkreis",
        "geo_data": {
            "lat": 53.59286179999999,
            "country": "de",
            "lng": 9.4709494,
            "region": "Niedersachsen"
        },
        "data_by_year": [1, 1, 4, 1, 6, 6],
        "sum_over_all": 19
    }, {
        "city": "Uelzen, Landkreis",
        "geo_data": {
            "lat": 52.9658199,
            "country": "de",
            "lng": 10.5580304,
            "region": "Niedersachsen"
        },
        "data_by_year": [3, 2, 0, 4, 2, 0],
        "sum_over_all": 11
    }, {
        "city": "Verden, Landkreis",
        "geo_data": {
            "lat": 52.9347982,
            "country": "de",
            "lng": 9.2329647,
            "region": "Niedersachsen"
        },
        "data_by_year": [1, 0, 2, 1, 1, 2],
        "sum_over_all": 7
    }, {
        "city": "Delmenhorst, Stadt",
        "geo_data": {
            "lat": 53.0521886,
            "country": "de",
            "lng": 8.635593199999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 0, 0, 2, 0, 0],
        "sum_over_all": 2
    }, {
        "city": "Emden, Stadt",
        "geo_data": {
            "lat": 53.35940290000001,
            "country": "de",
            "lng": 7.2060095,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 1],
        "sum_over_all": 1
    }, {
        "city": "Oldenburg (Oldenburg), Stadt",
        "geo_data": {
            "lat": 53.1434501,
            "country": "de",
            "lng": 8.214552099999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [1, 7, 1, 10, 3, 7],
        "sum_over_all": 29
    }, {
        "city": "Osnabrück, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Niedersachsen",
            "lat": 52.2799112,
            "lng": 8.0471788
        },
        "data_by_year": [5, 4, 7, 2, 6, 8],
        "sum_over_all": 32
    }, {
        "city": "Wilhelmshaven, Stadt",
        "geo_data": {
            "lat": 53.53234029999999,
            "country": "de",
            "lng": 8.1068722,
            "region": "Niedersachsen"
        },
        "data_by_year": [3, 3, 2, 0, 1, 0],
        "sum_over_all": 9
    }, {
        "city": "Ammerland, Landkreis",
        "geo_data": {
            "lat": 53.2512996,
            "country": "de",
            "lng": 8.0110148,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 0, 0, 1, 1, 1],
        "sum_over_all": 3
    }, {
        "city": "Aurich, Landkreis",
        "geo_data": {
            "lat": 53.47083929999999,
            "country": "de",
            "lng": 7.484830799999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [1, 0, 3, 5, 4, 4],
        "sum_over_all": 17
    }, {
        "city": "Cloppenburg, Landkreis",
        "geo_data": {
            "lat": 52.844198,
            "country": "de",
            "lng": 8.053015799999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [2, 1, 3, 2, 3, 1],
        "sum_over_all": 12
    }, {
        "city": "Emsland, Landkreis",
        "geo_data": {
            "lat": 52.7253212,
            "country": "de",
            "lng": 7.463152499999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [3, 4, 4, 1, 2, 1],
        "sum_over_all": 15
    }, {
        "city": "Friesland, Landkreis",
        "geo_data": {
            "lat": 53.687755,
            "country": "de",
            "lng": 7.945458,
            "region": "Friesland"
        },
        "data_by_year": [0, 1, 2, 1, 3, 7],
        "sum_over_all": 14
    }, {
        "city": "Grafschaft Bentheim, Landkreis",
        "geo_data": {
            "lat": 50.5804292,
            "country": "de",
            "lng": 7.0508886,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 3, 0, 1, 0, 0],
        "sum_over_all": 4
    }, {
        "city": "Leer, Landkreis",
        "geo_data": {
            "lat": 53.235657,
            "country": "de",
            "lng": 7.4679018,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 1, 1, 0, 0, 0],
        "sum_over_all": 2
    }, {
        "city": "Oldenburg, Landkreis",
        "geo_data": {
            "lat": 53.1434501,
            "country": "de",
            "lng": 8.214552099999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 1, 1, 2, 1, 0],
        "sum_over_all": 5
    }, {
        "city": "Osnabrck, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Niedersachsen",
            "lat": 52.2799112,
            "lng": 8.0471788
        },
        "data_by_year": [4, 6, 7, 2, 5, 3],
        "sum_over_all": 27
    }, {
        "city": "Vechta, Landkreis",
        "geo_data": {
            "lat": 52.72922519999999,
            "country": "de",
            "lng": 8.2838762,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 5, 3, 0, 0, 3],
        "sum_over_all": 11
    }, {
        "city": "Wesermarsch, Landkreis",
        "geo_data": {
            "lat": 53.3979286,
            "country": "de",
            "lng": 8.4038814,
            "region": "Niedersachsen"
        },
        "data_by_year": [3, 0, 1, 2, 2, 2],
        "sum_over_all": 10
    }, {
        "city": "Wittmund, Landkreis",
        "geo_data": {
            "lat": 53.57663110000001,
            "country": "de",
            "lng": 7.773288999999999,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 1, 2, 0, 0, 0],
        "sum_over_all": 3
    }, {
        "city": "Bremen, Stadt",
        "geo_data": {
            "lat": 53.07929619999999,
            "country": "de",
            "lng": 8.8016936,
            "region": "Bremen"
        },
        "data_by_year": [12, 22, 28, 28, 13, 18],
        "sum_over_all": 121
    }, {
        "city": "Bremerhaven, Stadt",
        "geo_data": {
            "lat": 53.5395845,
            "country": "de",
            "lng": 8.580942499999999,
            "region": "Bremen"
        },
        "data_by_year": [0, 2, 1, 2, 2, 6],
        "sum_over_all": 13
    }, {
        "city": "Düsseldorf, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.2277411,
            "lng": 6.7734556
        },
        "data_by_year": [10, 21, 26, 14, 33, 44],
        "sum_over_all": 148
    }, {
        "city": "Duisburg, Stadt",
        "geo_data": {
            "lat": 51.4344079,
            "country": "de",
            "lng": 6.762329299999999,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [4, 7, 14, 5, 10, 8],
        "sum_over_all": 48
    }, {
        "city": "Essen, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.4556432,
            "lng": 7.0115552
        },
        "data_by_year": [11, 11, 20, 16, 16, 16],
        "sum_over_all": 90
    }, {
        "city": "Krefeld, Stadt",
        "geo_data": {
            "lat": 51.3387609,
            "country": "de",
            "lng": 6.5853417,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [2, 2, 0, 10, 6, 7],
        "sum_over_all": 27
    }, {
        "city": "Mönchengladbach, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.1804572,
            "lng": 6.4428041
        },
        "data_by_year": [4, 5, 2, 4, 3, 2],
        "sum_over_all": 20
    }, {
        "city": "Mülheim an der Ruhr, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.1804572,
            "lng": 6.4428041
        },
        "data_by_year": [1, 6, 6, 4, 1, 4],
        "sum_over_all": 22
    }, {
        "city": "Oberhausen, Stadt",
        "geo_data": {
            "lat": 51.4963341,
            "country": "de",
            "lng": 6.863776499999999,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [1, 4, 3, 5, 6, 2],
        "sum_over_all": 21
    }, {
        "city": "Remscheid, Stadt",
        "geo_data": {
            "lat": 51.1787418,
            "country": "de",
            "lng": 7.1896963,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [3, 3, 0, 1, 2, 0],
        "sum_over_all": 9
    }, {
        "city": "Solingen, Stadt",
        "geo_data": {
            "lat": 51.1652199,
            "country": "de",
            "lng": 7.0671161,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [5, 2, 4, 1, 1, 1],
        "sum_over_all": 14
    }, {
        "city": "Wuppertal, Stadt",
        "geo_data": {
            "lat": 51.2562128,
            "country": "de",
            "lng": 7.150763599999999,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [8, 4, 8, 8, 7, 4],
        "sum_over_all": 39
    }, {
        "city": "Kleve, Kreis",
        "geo_data": {
            "lat": 51.78672599999999,
            "country": "de",
            "lng": 6.12954,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [6, 1, 6, 11, 4, 2],
        "sum_over_all": 30
    }, {
        "city": "Mettmann, Kreis",
        "geo_data": {
            "lat": 51.2506663,
            "country": "de",
            "lng": 6.9740265,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [7, 7, 6, 6, 7, 2],
        "sum_over_all": 35
    }, {
        "city": "Neuss, Kreis",
        "geo_data": {
            "lat": 51.2041968,
            "country": "de",
            "lng": 6.6879511,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [8, 8, 11, 8, 3, 7],
        "sum_over_all": 45
    }, {
        "city": "Viersen, Kreis",
        "geo_data": {
            "lat": 51.2554987,
            "country": "de",
            "lng": 6.3965235,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [2, 1, 1, 3, 8, 3],
        "sum_over_all": 18
    }, {
        "city": "Wesel, Kreis",
        "geo_data": {
            "lat": 51.6643079,
            "country": "de",
            "lng": 6.6295679,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [2, 1, 2, 4, 10, 4],
        "sum_over_all": 23
    }, {
        "city": "Aachen, Stadt",
        "geo_data": {
            "lat": 50.7753455,
            "country": "de",
            "lng": 6.083886800000001,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Bonn, Stadt",
        "geo_data": {
            "lat": 50.73743,
            "country": "de",
            "lng": 7.0982068,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [18, 13, 17, 27, 22, 28],
        "sum_over_all": 125
    }, {
        "city": "Köln, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 50.937531,
            "lng": 6.9602786
        },
        "data_by_year": [22, 30, 43, 30, 34, 29],
        "sum_over_all": 188
    }, {
        "city": "Leverkusen, Stadt",
        "geo_data": {
            "lat": 51.04592479999999,
            "country": "de",
            "lng": 7.0192196,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [0, 6, 4, 3, 6, 2],
        "sum_over_all": 21
    },{
        "city": "Aachen, Kreis",
        "geo_data": {
            "lat": 50.7753455,
            "country": "de",
            "lng": 6.083886800000001,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [24, 20, 28, 24, 21, 21],
        "sum_over_all": 138
    }, {
        "city": "Düren, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 50.8029513,
            "lng": 6.481105
        },
        "data_by_year": [4, 4, 5, 5, 5, 6],
        "sum_over_all": 29
    }, {
        "city": "Erftkreis",
        "geo_data": {
            "lat": 50.9436524,
            "country": "de",
            "lng": 6.734908900000001,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [5, 12, 5, 1, 8, 4],
        "sum_over_all": 35
    }, {
        "city": "Euskirchen, Kreis",
        "geo_data": {
            "lat": 50.6574392,
            "country": "de",
            "lng": 6.7899945,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [0, 2, 4, 0, 2, 3],
        "sum_over_all": 11
    }, {
        "city": "Heinsberg, Kreis",
        "geo_data": {
            "lat": 51.0605605,
            "country": "de",
            "lng": 6.1343822,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [6, 0, 1, 3, 2, 6],
        "sum_over_all": 18
    }, {
        "city": "Oberbergischer Kreis",
        "geo_data": {
            "lat": 50.974912,
            "country": "de",
            "lng": 7.5897206,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [2, 5, 5, 3, 5, 3],
        "sum_over_all": 23
    }, {
        "city": "Rheinisch-Bergischer Kreis",
        "geo_data": {
            "lat": 51.00142409999999,
            "country": "de",
            "lng": 7.1712599,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [5, 2, 2, 3, 4, 9],
        "sum_over_all": 25
    }, {
        "city": "Rhein-Sieg-Kreis",
        "geo_data": {
            "lat": 50.7413608,
            "country": "de",
            "lng": 7.315169399999999,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [18, 14, 11, 4, 7, 14],
        "sum_over_all": 68
    }, {
        "city": "Bottrop, Stadt",
        "geo_data": {
            "lat": 51.529086,
            "country": "de",
            "lng": 6.944688699999999,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [1, 0, 0, 1, 1, 2],
        "sum_over_all": 5
    }, {
        "city": "Gelsenkirchen, Stadt",
        "geo_data": {
            "lat": 51.517744,
            "country": "de",
            "lng": 7.085717199999999,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [1, 3, 2, 1, 3, 0],
        "sum_over_all": 10
    }, {
        "city": "Münster, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.9606649,
            "lng": 7.6261347
        },
        "data_by_year": [19, 17, 12, 17, 15, 17],
        "sum_over_all": 97
    }, {
        "city": "Borken, Kreis",
        "geo_data": {
            "lat": 51.84827139999999,
            "country": "de",
            "lng": 6.8594477,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [2, 3, 4, 3, 0, 7],
        "sum_over_all": 19
    }, {
        "city": "Coesfeld, Kreis",
        "geo_data": {
            "lat": 51.9382944,
            "country": "de",
            "lng": 7.1675831,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [2, 0, 3, 6, 4, 3],
        "sum_over_all": 18
    }, {
        "city": "Recklinghausen, Kreis",
        "geo_data": {
            "lat": 51.6140649,
            "country": "de",
            "lng": 7.1979453,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [6, 6, 1, 2, 13, 11],
        "sum_over_all": 39
    }, {
        "city": "Steinfurt, Kreis",
        "geo_data": {
            "lat": 52.1445658,
            "country": "de",
            "lng": 7.333463600000001,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [3, 10, 7, 12, 10, 12],
        "sum_over_all": 54
    }, {
        "city": "Warendorf, Kreis",
        "geo_data": {
            "lat": 51.9538685,
            "country": "de",
            "lng": 7.9908987,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [7, 2, 2, 3, 3, 8],
        "sum_over_all": 25
    }, {
        "city": "Bielefeld, Stadt",
        "geo_data": {
            "lat": 52.0302285,
            "country": "de",
            "lng": 8.532470800000002,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [13, 10, 11, 6, 5, 4],
        "sum_over_all": 49
    }, {
        "city": "Gütersloh, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.9032375,
            "lng": 8.385753500000002
        },
        "data_by_year": [1, 5, 4, 7, 3, 4],
        "sum_over_all": 24
    }, {
        "city": "Herford, Kreis",
        "geo_data": {
            "lat": 52.17590149999999,
            "country": "de",
            "lng": 8.5988205,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [7, 1, 3, 1, 2, 3],
        "sum_over_all": 17
    }, {
        "city": "Höxter, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.7774678,
            "lng": 9.3771214            
        },
        "data_by_year": [0, 4, 2, 0, 3, 2],
        "sum_over_all": 11
    }, {
        "city": "Lippe, Kreis",
        "geo_data": {
            "lat": 51.9759031,
            "country": "de",
            "lng": 8.9865279,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [5, 8, 12, 3, 13, 8],
        "sum_over_all": 49
    }, {
        "city": "Minden-Lübbecke, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 52.33515380000001,
            "lng": 8.7623421
        },
        "data_by_year": [7, 5, 0, 4, 3, 2],
        "sum_over_all": 21
    }, {
        "city": "Paderborn, Kreis",
        "geo_data": {
            "lat": 51.7189205,
            "country": "de",
            "lng": 8.757509299999999,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [7, 9, 7, 4, 12, 7],
        "sum_over_all": 46
    }, {
        "city": "Bochum, Stadt",
        "geo_data": {
            "lat": 51.4818445,
            "country": "de",
            "lng": 7.216236299999999,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [11, 11, 3, 4, 3, 8],
        "sum_over_all": 40
    }, {
        "city": "Dortmund, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.5135872,
            "lng": 7.465298100000001
        },
        "data_by_year": [11, 8, 0, 12, 13, 16],
        "sum_over_all": 60
    }, {
        "city": "Hagen, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.3670777,
            "lng": 7.4632841
        },
        "data_by_year": [0, 2, 2, 3, 1, 5],
        "sum_over_all": 13
    }, {
        "city": "Hamm, Stadt",
        "geo_data": {
            "lat": 51.6738583,
            "country": "de",
            "lng": 7.8159817,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [8, 2, 1, 1, 2, 5],
        "sum_over_all": 19
    }, {
        "city": "Herne, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.5368948,
            "lng": 7.200914699999999
        },
        "data_by_year": [2, 0, 1, 0, 0, 3],
        "sum_over_all": 6
    }, {
        "city": "Ennepe-Ruhr-Kreis",
        "geo_data": {
            "lat": 51.3482575,
            "country": "de",
            "lng": 7.3417423,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [10, 4, 2, 4, 3, 5],
        "sum_over_all": 28
    }, {
        "city": "Hochsauerlandkreis",
        "geo_data": {
            "lat": 51.2990466,
            "country": "de",
            "lng": 8.3851207,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [4, 7, 5, 4, 3, 4],
        "sum_over_all": 27
    }, {
        "city": "Märkischer Kreis",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.3433,
            "lng": 7.744996500000001
        },
        "data_by_year": [7, 6, 9, 8, 5, 7],
        "sum_over_all": 42
    }, {
        "city": "Olpe, Kreis",
        "geo_data": {
            "lat": 51.0282107,
            "country": "de",
            "lng": 7.8502943,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [0, 2, 1, 3, 5, 2],
        "sum_over_all": 13
    }, {
        "city": "Siegen-Wittgenstein, Kreis",
        "geo_data": {
            "lat": 50.93201140000001,
            "country": "de",
            "lng": 8.221204199999999,
            "region": "Nordrhein-Westfalen"
        },
        "data_by_year": [6, 2, 6, 10, 5, 3],
        "sum_over_all": 32
    }, {
        "city": "Soest, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Nordrhein-Westfalen",
            "lat": 51.5711476,
            "lng": 8.105754
        },
        "data_by_year": [5, 7, 3, 2, 5, 6],
        "sum_over_all": 28
    }, {
        "city": "Unna, Kreis",
        "geo_data": {
            "lat": 51.5426349,
            "country": "de",
            "lng": 7.685311400000001,
            "region": "Nordrhein Westfalen"
        },
        "data_by_year": [3, 3, 4, 1, 3, 4],
        "sum_over_all": 18
    }, {
        "city": "Darmstadt, Stadt",
        "geo_data": {
            "lat": 49.8728253,
            "country": "de",
            "lng": 8.6511929,
            "region": "Hessen"
        },
        "data_by_year": [10, 9, 12, 8, 13, 17],
        "sum_over_all": 69
    }, {
        "city": "Frankfurt am Main, Stadt",
        "geo_data": {
            "lat": 50.1109221,
            "country": "de",
            "lng": 8.6821267,
            "region": "Hessen"
        },
        "data_by_year": [30, 30, 16, 33, 33, 40],
        "sum_over_all": 182
    }, {
        "city": "Offenbach am Main, Stadt",
        "geo_data": {
            "lat": 50.09563620000001,
            "country": "de",
            "lng": 8.776084299999999,
            "region": "Hessen"
        },
        "data_by_year": [10, 1, 7, 6, 13, 6],
        "sum_over_all": 43
    }, {
        "city": "Wiesbaden, Landeshauptstadt",
        "geo_data": {
            "lat": 50.0782184,
            "country": "de",
            "lng": 8.239760799999999,
            "region": "Hessen"
        },
        "data_by_year": [11, 9, 25, 11, 9, 8],
        "sum_over_all": 73
    }, {
        "city": "Bergstrae, Landkreis",
        "geo_data": {
            "lat": 49.1317868,
            "country": "de",
            "lng": 8.0039321,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [7, 3, 3, 3, 9, 1],
        "sum_over_all": 26
    }, {
        "city": "Darmstadt-Dieburg, Landkreis",
        "geo_data": {
            "lat": 49.88576699999999,
            "country": "de",
            "lng": 8.8616298,
            "region": "Hessen"
        },
        "data_by_year": [7, 2, 7, 8, 7, 5],
        "sum_over_all": 36
    }, {
        "city": "Gro-Gerau, Landkreis",
        "geo_data": {
            "lat": 49.9203655,
            "country": "de",
            "lng": 8.4847038,
            "region": "Hessen"
        },
        "data_by_year": [1, 4, 2, 4, 9, 8],
        "sum_over_all": 28
    }, {
        "city": "Hochtaunuskreis",
        "geo_data": {
            "lat": 50.240598,
            "country": "de",
            "lng": 8.54839,
            "region": "Hessen"
        },
        "data_by_year": [13, 10, 6, 7, 4, 5],
        "sum_over_all": 45
    }, {
        "city": "Main-Kinzig-Kreis",
        "geo_data": {
            "lat": 50.2652761,
            "country": "de",
            "lng": 9.304936,
            "region": "Hessen"
        },
        "data_by_year": [9, 7, 5, 7, 3, 13],
        "sum_over_all": 44
    }, {
        "city": "Main-Taunus-Kreis",
        "geo_data": {
            "lat": 50.1043397,
            "country": "de",
            "lng": 8.427671199999999,
            "region": "Hessen"
        },
        "data_by_year": [4, 4, 5, 3, 11, 14],
        "sum_over_all": 41
    }, {
        "city": "Odenwaldkreis",
        "geo_data": {
            "lat": 49.6285491,
            "country": "de",
            "lng": 8.9904016,
            "region": "Hessen"
        },
        "data_by_year": [1, 1, 0, 2, 6, 3],
        "sum_over_all": 13
    }, {
        "city": "Offenbach, Landkreis",
        "geo_data": {
            "lat": 50.09563620000001,
            "country": "de",
            "lng": 8.776084299999999,
            "region": "Hessen"
        },
        "data_by_year": [5, 4, 11, 3, 9, 9],
        "sum_over_all": 41
    }, {
        "city": "Rheingau-Taunus-Kreis",
        "geo_data": {
            "lat": 50.1891679,
            "country": "de",
            "lng": 8.1104164,
            "region": "Hessen"
        },
        "data_by_year": [3, 2, 4, 3, 3, 3],
        "sum_over_all": 18
    }, {
        "city": "Wetteraukreis",
        "geo_data": {
            "lat": 50.3794495,
            "country": "de",
            "lng": 8.9120439,
            "region": "Hessen"
        },
        "data_by_year": [9, 10, 9, 2, 15, 8],
        "sum_over_all": 53
    }, {
        "city": "Gieen, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Hessen",
            "lat": 50.5840512,
            "lng": 8.678403099999999
        },
        "data_by_year": [20, 13, 12, 6, 13, 14],
        "sum_over_all": 78
    }, {
        "city": "Lahn-Dill-Kreis",
        "geo_data": {
            "lat": 50.6709711,
            "country": "de",
            "lng": 8.3585875,
            "region": "Hessen"
        },
        "data_by_year": [7, 6, 2, 7, 9, 5],
        "sum_over_all": 36
    }, {
        "city": "Limburg-Weilburg, Landkreis",
        "geo_data": {
            "lat": 50.4333676,
            "country": "de",
            "lng": 8.181544600000002,
            "region": "Hessen"
        },
        "data_by_year": [0, 3, 5, 4, 7, 8],
        "sum_over_all": 27
    }, {
        "city": "Marburg-Biedenkopf, Landkreis",
        "geo_data": {
            "lat": 50.8114016,
            "country": "de",
            "lng": 8.7250642,
            "region": "Hessen"
        },
        "data_by_year": [14, 20, 25, 9, 13, 15],
        "sum_over_all": 96
    }, {
        "city": "Vogelsbergkreis",
        "geo_data": {
            "lat": 50.598629,
            "country": "de",
            "lng": 9.307901,
            "region": "Hessen"
        },
        "data_by_year": [2, 2, 3, 1, 2, 2],
        "sum_over_all": 12
    }, {
        "city": "Kassel, Stadt",
        "geo_data": {
            "lat": 51.3127114,
            "country": "de",
            "lng": 9.4797461,
            "region": "Hessen"
        },
        "data_by_year": [14, 17, 7, 13, 13, 11],
        "sum_over_all": 75
    }, {
        "city": "Fulda, Landkreis",
        "geo_data": {
            "lat": 50.5558095,
            "country": "de",
            "lng": 9.6808449,
            "region": "Hessen"
        },
        "data_by_year": [12, 9, 11, 9, 11, 12],
        "sum_over_all": 64
    }, {
        "city": "Hersfeld-Rotenburg, Landkreis",
        "geo_data": {
            "lat": 50.8985515,
            "country": "de",
            "lng": 9.739875699999999,
            "region": "Hessen"
        },
        "data_by_year": [3, 8, 1, 1, 4, 3],
        "sum_over_all": 20
    }, {
        "city": "Kassel, Landkreis",
        "geo_data": {
            "lat": 51.3127114,
            "country": "de",
            "lng": 9.4797461,
            "region": "Hessen"
        },
        "data_by_year": [2, 2, 11, 3, 2, 4],
        "sum_over_all": 24
    }, {
        "city": "Schwalm-Eder-Kreis",
        "geo_data": {
            "lat": 51.0523685,
            "country": "de",
            "lng": 9.4057304,
            "region": "Hessen"
        },
        "data_by_year": [3, 4, 3, 7, 4, 3],
        "sum_over_all": 24
    }, {
        "city": "Waldeck-Frankenberg, Landkreis",
        "geo_data": {
            "lat": 51.2220857,
            "country": "de",
            "lng": 8.8549242,
            "region": "Hessen"
        },
        "data_by_year": [9, 5, 1, 2, 2, 5],
        "sum_over_all": 24
    }, {
        "city": "Werra-Meiner-Kreis",
        "geo_data": {
            "lat": 51.2167751,
            "country": "de",
            "lng": 9.964372899999999,
            "region": "Hessen"
        },
        "data_by_year": [0, 3, 1, 2, 3, 2],
        "sum_over_all": 11
    }, {
        "city": "Koblenz, Stadt",
        "geo_data": {
            "lat": 50.3569429,
            "country": "de",
            "lng": 7.5889959,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [9, 2, 5, 4, 7, 5],
        "sum_over_all": 32
    }, {
        "city": "Ahrweiler, Kreis",
        "geo_data": {
            "lat": 50.5418199,
            "country": "de",
            "lng": 7.11977,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [2, 3, 3, 3, 0, 5],
        "sum_over_all": 16
    }, {
        "city": "Altenkirchen (Westerwald), Kreis",
        "geo_data": {
            "lat": 50.687222,
            "country": "de",
            "lng": 7.645556000000001,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [5, 1, 2, 3, 1, 0],
        "sum_over_all": 12
    }, {
        "city": "Bad Kreuznach, Kreis",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.8440162,
            "lng": 7.873134599999999
        },
        "data_by_year": [2, 3, 2, 3, 3, 1],
        "sum_over_all": 14
    }, {
        "city": "Birkenfeld, Kreis",
        "geo_data": {
            "lat": 49.6512438,
            "country": "de",
            "lng": 7.1631611,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 1, 0, 3, 2, 3],
        "sum_over_all": 9
    }, {
        "city": "Cochem-Zell, Kreis",
        "geo_data": {
            "lat": 50.1474176,
            "country": "de",
            "lng": 7.1701795,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 0, 1, 1, 0, 0],
        "sum_over_all": 2
    }, {
        "city": "Mayen-Koblenz, Kreis",
        "geo_data": {
            "lat": 50.3253123,
            "country": "de",
            "lng": 7.3110906,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [6, 4, 1, 0, 2, 1],
        "sum_over_all": 14
    }, {
        "city": "Neuwied, Kreis",
        "geo_data": {
            "lat": 50.4361866,
            "country": "de",
            "lng": 7.4664546,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 1, 3, 2, 1, 4],
        "sum_over_all": 11
    }, {
        "city": "Rhein-Hunsrck-Kreis",
        "geo_data": {
            "lat": 50.0613664,
            "country": "de",
            "lng": 7.5526519,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [1, 0, 0, 0, 1, 1],
        "sum_over_all": 3
    }, {
        "city": "Rhein-Lahn-Kreis",
        "geo_data": {
            "lat": 50.2917917,
            "country": "de",
            "lng": 7.8244911,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [2, 1, 0, 0, 3, 4],
        "sum_over_all": 10
    }, {
        "city": "Westerwaldkreis",
        "geo_data": {
            "lat": 50.53663479999999,
            "country": "de",
            "lng": 7.8933078,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [5, 4, 2, 5, 2, 3],
        "sum_over_all": 21
    }, {
        "city": "Trier, Stadt",
        "geo_data": {
            "lat": 49.749992,
            "country": "de",
            "lng": 6.6371433,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [5, 3, 7, 4, 6, 6],
        "sum_over_all": 31
    }, {
        "city": "Bernkastel-Wittlich, Landkreis",
        "geo_data": {
            "lat": 49.9308031,
            "country": "de",
            "lng": 7.0041761,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 1, 1, 4, 0, 2],
        "sum_over_all": 8
    }, {
        "city": "Bitburg-Prüm, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 50.0905713,
            "lng": 6.3802843
        },
        "data_by_year": [0, 1, 0, 2, 0, 2],
        "sum_over_all": 5
    }, {
        "city": "Daun, Landkreis",
        "geo_data": {
            "lat": 50.1952445,
            "country": "de",
            "lng": 6.8232859,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 0, 1, 0, 0, 0],
        "sum_over_all": 1
    }, {
        "city": "Trier-Saarburg, Landkreis",
        "geo_data": {
            "lat": 49.6186654,
            "country": "de",
            "lng": 6.725129,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 3, 4, 3, 0, 1],
        "sum_over_all": 11
    }, {
        "city": "Frankenthal (Pfalz), Stadt",
        "geo_data": {
            "lat": 49.5431853,
            "country": "de",
            "lng": 8.3512342,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 0, 2, 0, 5, 1],
        "sum_over_all": 8
    }, {
        "city": "Kaiserslautern, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.4400657,
            "lng": 7.7491265
        },
        "data_by_year": [7, 11, 8, 3, 5, 9],
        "sum_over_all": 43
    }, {
        "city": "Landau in der Pfalz, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.19888599999999,
            "lng": 8.1185622
        },
        "data_by_year": [0, 1, 1, 3, 6, 2],
        "sum_over_all": 13
    }, {
        "city": "Ludwigshafen am Rhein, Stadt",
        "geo_data": {
            "lat": 49.47741,
            "country": "de",
            "lng": 8.445179999999999,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [2, 7, 6, 5, 2, 5],
        "sum_over_all": 27
    }, {
        "city": "Mainz, Stadt",
        "geo_data": {
            "lat": 49.9928617,
            "country": "de",
            "lng": 8.2472526,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [14, 4, 5, 17, 15, 14],
        "sum_over_all": 69
    }, {
        "city": "Neustadt an der Weinstrae, Stadt",
        "geo_data": {
            "lat": 49.3501864,
            "country": "de",
            "lng": 8.1486886,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [1, 1, 1, 1, 2, 0],
        "sum_over_all": 6
    }, {
        "city": "Pirmasens, Stadt",
        "geo_data": {
            "lat": 49.20155500000001,
            "country": "de",
            "lng": 7.600216100000001,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 1, 2, 1, 2, 1],
        "sum_over_all": 7
    }, {
        "city": "Speyer, Stadt",
        "geo_data": {
            "lat": 49.3172765,
            "country": "de",
            "lng": 8.441217199999999,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [1, 1, 0, 1, 4, 4],
        "sum_over_all": 11
    }, {
        "city": "Worms, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.6341372,
            "lng": 8.3507182
        },
        "data_by_year": [5, 2, 4, 0, 1, 1],
        "sum_over_all": 13
    }, {
        "city": "Zweibrücken, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.2450528,
            "lng": 7.3634022
        },
        "data_by_year": [0, 0, 1, 0, 0, 1],
        "sum_over_all": 2
    }, {
        "city": "Alzey-Worms, Landkreis",
        "geo_data": {
            "lat": 49.7771297,
            "country": "de",
            "lng": 8.0957661,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [3, 0, 5, 0, 2, 1],
        "sum_over_all": 11
    }, {
        "city": "Bad Dürkheim, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.4598369,
            "lng": 8.1654232
        },
        "data_by_year": [0, 6, 6, 2, 1, 1],
        "sum_over_all": 16
    }, {
        "city": "Donnersbergkreis",
        "geo_data": {
            "lat": 49.6229588,
            "country": "de",
            "lng": 7.9483049,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [0, 0, 1, 1, 3, 0],
        "sum_over_all": 5
    }, {
        "city": "Germersheim, Landkreis",
        "geo_data": {
            "lat": 49.2140244,
            "country": "de",
            "lng": 8.3668146,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [4, 5, 3, 0, 2, 2],
        "sum_over_all": 16
    }, {
        "city": "Kaiserslautern, Landkreis",
        "geo_data": {
            "lat": 49.4400657,
            "country": "de",
            "lng": 7.7491265,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [1, 4, 2, 1, 0, 1],
        "sum_over_all": 9
    }, {
        "city": "Kusel, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.534722,
            "lng": 7.398056
        },
        "data_by_year": [0, 0, 0, 2, 0, 1],
        "sum_over_all": 3
    }, {
        "city": "Südliche Weinstraße, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.2296152,
            "lng": 8.0159881
        },
        "data_by_year": [3, 4, 1, 4, 2, 1],
        "sum_over_all": 15
    }, {
        "city": "Ludwigshafen, Landkreis",
        "geo_data": {
            "lat": 49.47741,
            "country": "de",
            "lng": 8.445179999999999,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [6, 3, 0, 3, 3, 6],
        "sum_over_all": 21
    }, {
        "city": "Mainz-Bingen, Landkreis",
        "geo_data": {
            "lat": 49.9238777,
            "country": "de",
            "lng": 8.0600235,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [4, 3, 3, 5, 3, 6],
        "sum_over_all": 24
    }, {
        "city": "Südwestpfalz, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Rheinland-Pfalz",
            "lat": 49.2283809,
            "lng": 7.736105
        },
        "data_by_year": [0, 1, 0, 0, 1, 0],
        "sum_over_all": 2
    }, {
        "city": "Stuttgart, Landeshauptstadt",
        "geo_data": {
            "lat": 48.7758459,
            "country": "de",
            "lng": 9.1829321,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [43, 51, 42, 41, 49, 38],
        "sum_over_all": 264
    }, {
        "city": "Böblingen, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Baden-Württemberg",
            "lat": 48.6813312,
            "lng": 9.0088299
        },
        "data_by_year": [15, 8, 10, 10, 13, 7],
        "sum_over_all": 63
    }, {
        "city": "Esslingen, Landkreis",
        "geo_data": {
            "lat": 48.7433425,
            "country": "de",
            "lng": 9.320112199999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [29, 12, 20, 15, 21, 21],
        "sum_over_all": 118
    }, {
        "city": "Gppingen, Landkreis",
        "geo_data": {
            "lat": 48.7054382,
            "country": "de",
            "lng": 9.6512491,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [11, 7, 2, 5, 13, 5],
        "sum_over_all": 43
    }, {
        "city": "Ludwigsburg, Landkreis",
        "geo_data": {
            "lat": 48.8940624,
            "country": "de",
            "lng": 9.195464,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [26, 8, 26, 13, 17, 16],
        "sum_over_all": 106
    }, {
        "city": "Rems-Murr-Kreis",
        "geo_data": {
            "lat": 48.8900669,
            "country": "de",
            "lng": 9.5300281,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [6, 12, 10, 12, 14, 13],
        "sum_over_all": 67
    }, {
        "city": "Heilbronn, Stadt",
        "geo_data": {
            "lat": 49.1426929,
            "country": "de",
            "lng": 9.210879,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [10, 9, 8, 8, 8, 10],
        "sum_over_all": 53
    }, {
        "city": "Heilbronn, Landkreis",
        "geo_data": {
            "lat": 49.1426929,
            "country": "de",
            "lng": 9.210879,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [11, 10, 10, 10, 8, 5],
        "sum_over_all": 54
    }, {
        "city": "Hohenlohekreis",
        "geo_data": {
            "lat": 49.2510988,
            "country": "de",
            "lng": 9.6007374,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [1, 8, 2, 2, 8, 12],
        "sum_over_all": 33
    }, {
        "city": "Schwäbisch Hall, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Baden-Württemberg",
            "lat": 49.1124645,
            "lng": 9.7372649
        },
        "data_by_year": [11, 8, 8, 9, 6, 11],
        "sum_over_all": 53
    }, {
        "city": "Main-Tauber-Kreis",
        "geo_data": {
            "lat": 49.5700201,
            "country": "de",
            "lng": 9.7105561,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [7, 5, 1, 6, 5, 4],
        "sum_over_all": 28
    }, {
        "city": "Heidenheim, Landkreis",
        "geo_data": {
            "lat": 48.6893963,
            "country": "de",
            "lng": 10.1610948,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [5, 5, 4, 8, 8, 8],
        "sum_over_all": 38
    }, {
        "city": "Ostalbkreis",
        "geo_data": {
            "lat": 48.8817917,
            "country": "de",
            "lng": 10.1009319,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [12, 16, 10, 9, 19, 10],
        "sum_over_all": 76
    }, {
        "city": "Baden-Baden, Stadt",
        "geo_data": {
            "lat": 48.76564,
            "country": "de",
            "lng": 8.228524199999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [3, 1, 3, 2, 5, 5],
        "sum_over_all": 19
    }, {
        "city": "Karlsruhe, Stadt",
        "geo_data": {
            "lat": 49.0068901,
            "country": "de",
            "lng": 8.4036527,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [19, 20, 17, 22, 28, 37],
        "sum_over_all": 143
    }, {
        "city": "Karlsruhe, Landkreis",
        "geo_data": {
            "lat": 49.0068901,
            "country": "de",
            "lng": 8.4036527,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [13, 8, 6, 8, 16, 17],
        "sum_over_all": 68
    }, {
        "city": "Rastatt, Landkreis",
        "geo_data": {
            "lat": 48.8591174,
            "country": "de",
            "lng": 8.2059096,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [5, 5, 6, 17, 10, 8],
        "sum_over_all": 51
    }, {
        "city": "Heidelberg, Stadt",
        "geo_data": {
            "lat": 49.3987524,
            "country": "de",
            "lng": 8.6724335,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [28, 17, 20, 9, 13, 28],
        "sum_over_all": 115
    }, {
        "city": "Mannheim, Universittsstadt",
        "geo_data": {
            "lat": 49.4874592,
            "country": "de",
            "lng": 8.466039499999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [18, 11, 20, 15, 17, 38],
        "sum_over_all": 119
    }, {
        "city": "Neckar-Odenwald-Kreis",
        "geo_data": {
            "lat": 49.44406679999999,
            "country": "de",
            "lng": 9.2454855,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [9, 6, 2, 2, 7, 3],
        "sum_over_all": 29
    }, {
        "city": "Rhein-Neckar-Kreis",
        "geo_data": {
            "lat": 49.3162084,
            "country": "de",
            "lng": 8.7871347,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [29, 14, 17, 12, 13, 14],
        "sum_over_all": 99
    }, {
        "city": "Pforzheim, Stadt",
        "geo_data": {
            "lat": 48.8921862,
            "country": "de",
            "lng": 8.6946286,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [2, 5, 4, 2, 8, 9],
        "sum_over_all": 30
    }, {
        "city": "Calw, Landkreis",
        "geo_data": {
            "lat": 48.7122107,
            "country": "de",
            "lng": 8.747243899999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [5, 2, 7, 6, 4, 5],
        "sum_over_all": 29
    }, {
        "city": "Enzkreis",
        "geo_data": {
            "lat": 48.98994070000001,
            "country": "de",
            "lng": 8.7883602,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [4, 4, 7, 3, 6, 5],
        "sum_over_all": 29
    }, {
        "city": "Freudenstadt, Landkreis",
        "geo_data": {
            "lat": 48.4644796,
            "country": "de",
            "lng": 8.4179988,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [1, 5, 3, 5, 3, 6],
        "sum_over_all": 23
    }, {
        "city": "Freiburg im Breisgau, Stadt",
        "geo_data": {
            "lat": 47.9990077,
            "country": "de",
            "lng": 7.842104299999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [21, 15, 24, 25, 21, 21],
        "sum_over_all": 127
    }, {
        "city": "Breisgau-Hochschwarzwald, Landkreis",
        "geo_data": {
            "lat": 47.945383,
            "country": "de",
            "lng": 7.843268599999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [6, 9, 11, 13, 6, 11],
        "sum_over_all": 56
    }, {
        "city": "Emmendingen, Landkreis",
        "geo_data": {
            "lat": 48.1170918,
            "country": "de",
            "lng": 7.853904699999998,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [2, 4, 2, 2, 2, 2],
        "sum_over_all": 14
    }, {
        "city": "Ortenaukreis",
        "geo_data": {
            "lat": 48.3644892,
            "country": "de",
            "lng": 7.9471358,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [11, 6, 10, 12, 9, 9],
        "sum_over_all": 57
    }, {
        "city": "Rottweil, Landkreis",
        "geo_data": {
            "lat": 48.1652577,
            "country": "de",
            "lng": 8.628453,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [0, 1, 3, 3, 1, 2],
        "sum_over_all": 10
    }, {
        "city": "Schwarzwald-Baar-Kreis",
        "geo_data": {
            "lat": 48.05172719999999,
            "country": "de",
            "lng": 8.4017661,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [8, 5, 10, 16, 4, 7],
        "sum_over_all": 50
    }, {
        "city": "Tuttlingen, Landkreis",
        "geo_data": {
            "lat": 47.98233159999999,
            "country": "de",
            "lng": 8.819209599999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [2, 1, 1, 2, 2, 4],
        "sum_over_all": 12
    }, {
        "city": "Konstanz, Landkreis",
        "geo_data": {
            "lat": 47.6779496,
            "country": "de",
            "lng": 9.173238399999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [18, 15, 17, 13, 15, 28],
        "sum_over_all": 106
    }, {
        "city": "Lörrach, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Baden-Württemberg",
            "lat": 47.6381181,
            "lng": 7.674941500000001
        },
        "data_by_year": [7, 3, 7, 4, 0, 12],
        "sum_over_all": 33
    }, {
        "city": "Waldshut, Landkreis",
        "geo_data": {
            "lat": 47.6327253,
            "country": "de",
            "lng": 8.2719155,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [13, 6, 5, 4, 3, 7],
        "sum_over_all": 38
    }, {
        "city": "Reutlingen, Landkreis",
        "geo_data": {
            "lat": 48.50693889999999,
            "country": "de",
            "lng": 9.2038043,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [12, 5, 8, 19, 14, 19],
        "sum_over_all": 77
    }, {
        "city": "Tbingen, Landkreis",
        "geo_data": {
            "lat": 48.5216364,
            "country": "de",
            "lng": 9.0576448,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [16, 26, 23, 20, 25, 17],
        "sum_over_all": 127
    }, {
        "city": "Zollernalbkreis",
        "geo_data": {
            "lat": 48.29244449999999,
            "country": "de",
            "lng": 8.925231199999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [3, 2, 4, 8, 3, 4],
        "sum_over_all": 24
    }, {
        "city": "Ulm, Universittsstadt",
        "geo_data": {
            "country": "de",
            "region": "Baden-Württemberg",
            "lat": 48.4010822,
            "lng": 9.987607599999999
        },
        "data_by_year": [11, 21, 26, 21, 10, 22],
        "sum_over_all": 111
    }, {
        "city": "Alb-Donau-Kreis",
        "geo_data": {
            "lat": 48.4277129,
            "country": "de",
            "lng": 9.7332485,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [12, 4, 4, 8, 7, 13],
        "sum_over_all": 48
    }, {
        "city": "Biberach, Landkreis",
        "geo_data": {
            "lat": 48.0951473,
            "country": "de",
            "lng": 9.7901525,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [9, 10, 6, 11, 16, 6],
        "sum_over_all": 58
    }, {
        "city": "Bodenseekreis",
        "geo_data": {
            "lat": 47.7136785,
            "country": "de",
            "lng": 9.4149697,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [23, 11, 10, 21, 10, 8],
        "sum_over_all": 83
    }, {
        "city": "Ravensburg, Landkreis",
        "geo_data": {
            "lat": 47.7782704,
            "country": "de",
            "lng": 9.612130299999999,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [21, 15, 15, 12, 25, 14],
        "sum_over_all": 102
    }, {
        "city": "Sigmaringen, Landkreis",
        "geo_data": {
            "lat": 48.0912921,
            "country": "de",
            "lng": 9.2286121,
            "region": "Baden-Württemberg"
        },
        "data_by_year": [1, 1, 5, 7, 4, 3],
        "sum_over_all": 21
    }, {
        "city": "Ingolstadt (Krfr.St)",
        "geo_data": {
            "lat": 48.7665351,
            "country": "de",
            "lng": 11.4257541,
            "region": "Bayern"
        },
        "data_by_year": [74, 69, 57, 75, 89, 67],
        "sum_over_all": 431
    }, {
        "city": "München, Landeshauptstadt",
        "geo_data": {
            "lat": 48.1351253,
            "country": "de",
            "lng": 11.5819805,
            "region": "Bayern"
        },
        "data_by_year": [417, 408, 466, 423, 455, 514],
        "sum_over_all": 2683
    }, {
        "city": "Rosenheim (Krfr.St)",
        "geo_data": {
            "lat": 47.8571272,
            "country": "de",
            "lng": 12.1181047,
            "region": "Bayern"
        },
        "data_by_year": [22, 21, 15, 18, 20, 28],
        "sum_over_all": 124
    }, {
        "city": "Alttting (Lkr)",
        "geo_data": {
            "lat": 48.2246432,
            "country": "de",
            "lng": 12.6767839,
            "region": "Bayern"
        },
        "data_by_year": [34, 36, 49, 44, 30, 32],
        "sum_over_all": 225
    }, {
        "city": "Berchtesgadener Land (Lkr)",
        "geo_data": {
            "lat": 47.6301796,
            "country": "de",
            "lng": 13.0000742,
            "region": "Bayern"
        },
        "data_by_year": [24, 23, 23, 37, 26, 35],
        "sum_over_all": 168
    }, {
        "city": "Bad Tölz-Wolfratshausen (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 47.6987736,
            "lng": 11.5257222
        },
        "data_by_year": [16, 27, 37, 23, 27, 24],
        "sum_over_all": 154
    }, {
        "city": "Dachau (Lkr)",
        "geo_data": {
            "country": "de",            
            "region": "Bayern",
            "lat": 48.2629984,
            "lng": 11.4339022
        },
        "data_by_year": [17, 21, 21, 25, 29, 22],
        "sum_over_all": 135
    }, {
        "city": "Ebersberg (Lkr)",
        "geo_data": {
            "lat": 48.0780006,
            "country": "de",
            "lng": 11.9669667,
            "region": "Bayern"
        },
        "data_by_year": [17, 28, 25, 24, 33, 27],
        "sum_over_all": 154
    }, {
        "city": "Eichstätt (Lkr)",
        "geo_data": {
            "lat": 48.89125079999999,
            "country": "de",
            "lng": 11.1899861,
            "region": "Bayern"
        },
        "data_by_year": [60, 57, 60, 46, 46, 54],
        "sum_over_all": 323
    }, {
        "city": "Erding (Lkr)",
        "geo_data": {
            "lat": 48.3114648,
            "country": "de",
            "lng": 11.9188758,
            "region": "Bayern"
        },
        "data_by_year": [32, 17, 33, 23, 37, 31],
        "sum_over_all": 173
    }, {
        "city": "Freising (Lkr)",
        "geo_data": {
            "lat": 48.4028796,
            "country": "de",
            "lng": 11.7411846,
            "region": "Bayern"
        },
        "data_by_year": [57, 52, 59, 50, 66, 87],
        "sum_over_all": 371
    }, {
        "city": "Fürstenfeldbruck (Lkr)",
        "geo_data": {
            "lat": 48.1739373,
            "country": "de",
            "lng": 11.2430079,
            "region": "Bayern"
        },
        "data_by_year": [31, 25, 21, 29, 37, 37],
        "sum_over_all": 180
    }, {
        "city": "Garmisch-Partenkirchen (Lkr)",
        "geo_data": {
            "lat": 47.4916945,
            "country": "de",
            "lng": 11.0954984,
            "region": "Bayern"
        },
        "data_by_year": [21, 23, 27, 31, 24, 21],
        "sum_over_all": 147
    }, {
        "city": "Landsberg am Lech (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 48.050783,
            "lng": 10.8703515
        },
        "data_by_year": [17, 19, 13, 22, 21, 16],
        "sum_over_all": 108
    }, {
        "city": "Miesbach (Lkr)",
        "geo_data": {
            "lat": 47.78997769999999,
            "country": "de",
            "lng": 11.8332675,
            "region": "Bayern"
        },
        "data_by_year": [25, 18, 23, 22, 19, 14],
        "sum_over_all": 121
    }, {
        "city": "Mühldorf am Inn",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 48.235879,
            "lng": 12.5332486
        },
        "data_by_year": [19, 21, 29, 29, 27, 25],
        "sum_over_all": 150
    }, {
        "city": "München (Lkr)",
        "geo_data": {
            "lat": 48.1351253,
            "country": "de",
            "lng": 11.5819805,
            "region": "Bayern"
        },
        "data_by_year": [61, 66, 73, 55, 74, 69],
        "sum_over_all": 398
    }, {
        "city": "Neuburg-Schrobenhausen (Lkr)",
        "geo_data": {
            "lat": 48.6986656,
            "country": "de",
            "lng": 11.1935703,
            "region": "Bayern"
        },
        "data_by_year": [39, 32, 21, 25, 25, 36],
        "sum_over_all": 178
    }, {
        "city": "Pfaffenhofen a.d.Ilm (Lkr)",
        "geo_data": {
            "lat": 48.53252149999999,
            "country": "de",
            "lng": 11.4977392,
            "region": "Bayern"
        },
        "data_by_year": [39, 30, 49, 43, 51, 54],
        "sum_over_all": 266
    }, {
        "city": "Rosenheim (Lkr)",
        "geo_data": {
            "lat": 47.8571272,
            "country": "de",
            "lng": 12.1181047,
            "region": "Bayern"
        },
        "data_by_year": [64, 50, 67, 62, 61, 76],
        "sum_over_all": 380
    }, {
        "city": "Starnberg (Lkr)",
        "geo_data": {
            "lat": 47.9999615,
            "country": "de",
            "lng": 11.339009,
            "region": "Bayern"
        },
        "data_by_year": [23, 20, 20, 19, 23, 31],
        "sum_over_all": 136
    }, {
        "city": "Traunstein (Lkr)",
        "geo_data": {
            "lat": 47.8677574,
            "country": "de",
            "lng": 12.6384037,
            "region": "Bayern"
        },
        "data_by_year": [55, 46, 48, 74, 49, 49],
        "sum_over_all": 321
    }, {
        "city": "Weilheim-Schongau (Lkr)",
        "geo_data": {
            "lat": 47.8251832,
            "country": "de",
            "lng": 11.0576663,
            "region": "Bayern"
        },
        "data_by_year": [27, 20, 38, 26, 20, 30],
        "sum_over_all": 161
    }, {
        "city": "Landshut (Krfr.St)",
        "geo_data": {
            "lat": 48.5441917,
            "country": "de",
            "lng": 12.1468532,
            "region": "Bayern"
        },
        "data_by_year": [70, 62, 86, 60, 83, 82],
        "sum_over_all": 443
    }, {
        "city": "Passau (Krfr.St)",
        "geo_data": {
            "lat": 48.5667364,
            "country": "de",
            "lng": 13.4319466,
            "region": "Bayern"
        },
        "data_by_year": [51, 63, 41, 56, 36, 64],
        "sum_over_all": 311
    }, {
        "city": "Straubing (Krfr.St)",
        "geo_data": {
            "lat": 48.8777333,
            "country": "de",
            "lng": 12.5801539,
            "region": "Bayern"
        },
        "data_by_year": [89, 98, 115, 105, 127, 127],
        "sum_over_all": 661
    }, {
        "city": "Deggendorf (Lkr)",
        "geo_data": {
            "lat": 48.8408515,
            "country": "de",
            "lng": 12.9574787,
            "region": "Bayern"
        },
        "data_by_year": [89, 110, 106, 109, 107, 114],
        "sum_over_all": 635
    }, {
        "city": "Freyung-Grafenau (Lkr)",
        "geo_data": {
            "lat": 48.80561540000001,
            "country": "de",
            "lng": 13.582951,
            "region": "Bayern"
        },
        "data_by_year": [42, 39, 47, 42, 35, 48],
        "sum_over_all": 253
    }, {
        "city": "Kelheim (Lkr)",
        "geo_data": {
            "lat": 48.9184118,
            "country": "de",
            "lng": 11.886563,
            "region": "Bayern"
        },
        "data_by_year": [460, 452, 465, 465, 479, 512],
        "sum_over_all": 2833
    }, {
        "city": "Landshut (Lkr)",
        "geo_data": {
            "lat": 48.5441917,
            "country": "de",
            "lng": 12.1468532,
            "region": "Bayern"
        },
        "data_by_year": [83, 82, 85, 80, 92, 126],
        "sum_over_all": 548
    }, {
        "city": "Passau (Lkr)",
        "geo_data": {
            "lat": 48.5667364,
            "country": "de",
            "lng": 13.4319466,
            "region": "Bayern"
        },
        "data_by_year": [84, 98, 81, 86, 83, 88],
        "sum_over_all": 520
    }, {
        "city": "Regen (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 48.9771815,
            "lng": 13.1283598
        },
        "data_by_year": [48, 51, 56, 57, 48, 62],
        "sum_over_all": 322
    }, {
        "city": "Rottal-Inn (Lkr)",
        "geo_data": {
            "lat": 48.3909949,
            "country": "de",
            "lng": 12.9451449,
            "region": "Bayern"
        },
        "data_by_year": [62, 51, 51, 44, 55, 61],
        "sum_over_all": 324
    }, {
        "city": "Straubing-Bogen (Lkr)",
        "geo_data": {
            "lat": 48.9594904,
            "country": "de",
            "lng": 12.6029872,
            "region": "Bayern"
        },
        "data_by_year": [113, 90, 122, 121, 145, 148],
        "sum_over_all": 739
    }, {
        "city": "Dingolfing-Landau (Lkr)",
        "geo_data": {
            "lat": 48.6367249,
            "country": "de",
            "lng": 12.5670747,
            "region": "Bayern"
        },
        "data_by_year": [40, 55, 45, 61, 47, 68],
        "sum_over_all": 316
    }, {
        "city": "Amberg (Krfr.St)",
        "geo_data": {
            "lat": 49.4403198,
            "country": "de",
            "lng": 11.8633445,
            "region": "Bayern"
        },
        "data_by_year": [90, 80, 103, 86, 109, 116],
        "sum_over_all": 584
    }, {
        "city": "Regensburg (Krfr.St)",
        "geo_data": {
            "lat": 49.0134297,
            "country": "de",
            "lng": 12.1016236,
            "region": "Bayern"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, 
    {
        "city": "Regensburg (Lkr)",
        "geo_data": {
            "lat": 49.0134297,
            "country": "de",
            "lng": 12.1016236,
            "region": "Bayern"
        },
        "data_by_year": [2104, 2042, 2149, 2328, 2425, 2675],
        "sum_over_all": 13723
    },{
        "city": "Weiden i.d.OPf. (Krfr.St)",
        "geo_data": {
            "lat": 49.6743636,
            "country": "de",
            "lng": 12.1489337,
            "region": "Bayern"
        },
        "data_by_year": [56, 67, 105, 64, 97, 78],
        "sum_over_all": 467
    }, {
        "city": "Amberg-Sulzbach (Lkr)",
        "geo_data": {
            "lat": 49.4642643,
            "country": "de",
            "lng": 11.7233784,
            "region": "Bayern"
        },
        "data_by_year": [97, 99, 106, 97, 102, 107],
        "sum_over_all": 608
    }, {
        "city": "Cham (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 49.2238643,
            "lng": 12.6620845
            
        },
        "data_by_year": [225, 233, 222, 229, 246, 273],
        "sum_over_all": 1428
    }, {
        "city": "Neumarkt i.d.OPf. (Lkr)",
        "geo_data": {
            "lat": 49.2772606,
            "country": "de",
            "lng": 11.4671995,
            "region": "Bayern"
        },
        "data_by_year": [169, 174, 252, 197, 162, 198],
        "sum_over_all": 1152
    }, {
        "city": "Neustadt a.d.Waldnaab (Lkr)",
        "geo_data": {
            "lat": 49.3501864,
            "country": "de",
            "lng": 8.1486886,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [86, 90, 98, 126, 114, 127],
        "sum_over_all": 641
    },  {
        "city": "Schwandorf (Lkr)",
        "geo_data": {
            "lat": 49.3198883,
            "country": "de",
            "lng": 12.1091352,
            "region": "Bayern"
        },
        "data_by_year": [394, 370, 480, 408, 412, 512],
        "sum_over_all": 2576
    }, {
        "city": "Tirschenreuth (Lkr)",
        "geo_data": {
            "lat": 49.8817161,
            "country": "de",
            "lng": 12.3303441,
            "region": "Bayern"
        },
        "data_by_year": [74, 72, 83, 49, 61, 63],
        "sum_over_all": 402
    }, {
        "city": "Bamberg (Krfr.St)",
        "geo_data": {
            "lat": 49.8988135,
            "country": "de",
            "lng": 10.9027636,
            "region": "Bayern"
        },
        "data_by_year": [27, 20, 30, 22, 17, 33],
        "sum_over_all": 149
    }, {
        "city": "Bayreuth (Krfr.St)",
        "geo_data": {
            "lat": 49.9456399,
            "country": "de",
            "lng": 11.5713346,
            "region": "Bayern"
        },
        "data_by_year": [36, 38, 43, 48, 45, 36],
        "sum_over_all": 246
    }, {
        "city": "Coburg (Krfr.St)",
        "geo_data": {
            "lat": 50.2612094,
            "country": "de",
            "lng": 10.962695,
            "region": "Bayern"
        },
        "data_by_year": [14, 17, 28, 30, 24, 16],
        "sum_over_all": 129
    }, {
        "city": "Hof (Krfr.St)",
        "geo_data": {
            "lat": 50.3135391,
            "country": "de",
            "lng": 11.9127814,
            "region": "Bayern"
        },
        "data_by_year": [11, 19, 21, 16, 11, 14],
        "sum_over_all": 92
    }, {
        "city": "Bamberg (Lkr)",
        "geo_data": {
            "lat": 49.8988135,
            "country": "de",
            "lng": 10.9027636,
            "region": "Bayern"
        },
        "data_by_year": [33, 13, 19, 16, 15, 16],
        "sum_over_all": 112
    }, {
        "city": "Bayreuth (Lkr)",
        "geo_data": {
            "lat": 49.9456399,
            "country": "de",
            "lng": 11.5713346,
            "region": "Bayern"
        },
        "data_by_year": [13, 19, 17, 23, 23, 19],
        "sum_over_all": 114
    }, {
        "city": "Coburg (Lkr)",
        "geo_data": {
            "lat": 50.2612094,
            "country": "de",
            "lng": 10.962695,
            "region": "Bayern"
        },
        "data_by_year": [4, 10, 11, 7, 9, 9],
        "sum_over_all": 50
    }, {
        "city": "Forchheim (Lkr)",
        "geo_data": {
            "lat": 49.7213064,
            "country": "de",
            "lng": 11.0698834,
            "region": "Bayern"
        },
        "data_by_year": [11, 8, 10, 26, 14, 16],
        "sum_over_all": 85
    }, {
        "city": "Hof (Lkr)",
        "geo_data": {
            "lat": 50.3135391,
            "country": "de",
            "lng": 11.9127814,
            "region": "Bayern"
        },
        "data_by_year": [17, 19, 11, 17, 20, 16],
        "sum_over_all": 100
    }, {
        "city": "Kronach (Lkr)",
        "geo_data": {
            "lat": 50.2359898,
            "country": "de",
            "lng": 11.3310482,
            "region": "Bayern"
        },
        "data_by_year": [8, 8, 5, 4, 7, 7],
        "sum_over_all": 39
    }, {
        "city": "Kulmbach (Lkr)",
        "geo_data": {
            "lat": 50.1039282,
            "country": "de",
            "lng": 11.4448178,
            "region": "Bayern"
        },
        "data_by_year": [6, 11, 6, 10, 14, 9],
        "sum_over_all": 56
    }, {
        "city": "Lichtenfels (Lkr)",
        "geo_data": {
            "lat": 50.1432937,
            "country": "de",
            "lng": 11.0630388,
            "region": "Bayern"
        },
        "data_by_year": [9, 10, 18, 19, 14, 11],
        "sum_over_all": 81
    }, {
        "city": "Wunsiedel i.Fichtelgebirge (Lkr)",
        "geo_data": {
            "lat": 50.0399087,
            "country": "de",
            "lng": 12.0039306,
            "region": "Bayern"
        },
        "data_by_year": [31, 37, 26, 36, 42, 30],
        "sum_over_all": 202
    }, {
        "city": "Ansbach (Krfr.St)",
        "geo_data": {
            "lat": 49.3004246,
            "country": "de",
            "lng": 10.5719357,
            "region": "Bayern"
        },
        "data_by_year": [7, 4, 11, 13, 8, 12],
        "sum_over_all": 55
    }, {
        "city": "Erlangen (Krfr.St)",
        "geo_data": {
            "lat": 49.5896744,
            "country": "de",
            "lng": 11.0119611,
            "region": "Bayern"
        },
        "data_by_year": [29, 49, 41, 41, 45, 56],
        "sum_over_all": 261
    }, {
        "city": "Fürth (Krfr.St)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 49.4771169,
            "lng": 10.988667
        },
        "data_by_year": [15, 30, 34, 18, 28, 21],
        "sum_over_all": 146
    }, {
        "city": "Nürnberg (Krfr.St)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 49.4521018,
            "lng": 11.0766654
        },
        "data_by_year": [160, 114, 112, 143, 142, 147],
        "sum_over_all": 818
    }, {
        "city": "Schwabach (Krfr.St)",
        "geo_data": {
            "lat": 49.3284557,
            "country": "de",
            "lng": 11.0247098,
            "region": "Bayern"
        },
        "data_by_year": [5, 6, 9, 9, 11, 12],
        "sum_over_all": 52
    }, {
        "city": "Ansbach (Lkr)",
        "geo_data": {
            "lat": 49.3004246,
            "country": "de",
            "lng": 10.5719357,
            "region": "Bayern"
        },
        "data_by_year": [33, 17, 26, 28, 32, 30],
        "sum_over_all": 166
    }, {
        "city": "Erlangen-Hchstadt (Lkr)",
        "geo_data": {
            "lat": 49.60932,
            "country": "de",
            "lng": 10.8804259,
            "region": "Bayern"
        },
        "data_by_year": [15, 23, 14, 29, 22, 13],
        "sum_over_all": 116
    }, {
        "city": "Fürth (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 49.4771169,
            "lng": 10.988667
        },
        "data_by_year": [93, 49, 64, 64, 56, 16],
        "sum_over_all": 342
    }, {
        "city": "Nürnberger Land (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 49.4961709,
            "lng": 11.4077016
        },
        "data_by_year": [19, 29, 36, 38, 49, 34],
        "sum_over_all": 205
    }, {
        "city": "Neustadt a.d.Aisch-Bad Windsheim (Lkr)",
        "geo_data": {
            "lat": 49.3501864,
            "country": "de",
            "lng": 8.1486886,
            "region": "Rheinland-Pfalz"
        },
        "data_by_year": [7, 6, 11, 7, 7, 8],
        "sum_over_all": 46
    }, {
        "city": "Roth (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 49.2456337,
            "lng": 11.0911607
        },
        "data_by_year": [13, 26, 23, 26, 23, 21],
        "sum_over_all": 132
    }, {
        "city": "Weienburg-Gunzenhausen (Lkr)",
        "geo_data": {
            "lat": 49.052484,
            "country": "de",
            "lng": 10.9062399,
            "region": "Bayern"
        },
        "data_by_year": [13, 16, 19, 12, 11, 18],
        "sum_over_all": 89
    }, {
        "city": "Aschaffenburg (Krfr.St)",
        "geo_data": {
            "lat": 49.9806625,
            "country": "de",
            "lng": 9.135555400000001,
            "region": "Bayern"
        },
        "data_by_year": [6, 6, 10, 9, 9, 9],
        "sum_over_all": 49
    }, {
        "city": "Schweinfurt (Krfr.St)",
        "geo_data": {
            "lat": 50.0492047,
            "country": "de",
            "lng": 10.2194227,
            "region": "Bayern"
        },
        "data_by_year": [4, 7, 6, 2, 7, 5],
        "sum_over_all": 31
    }, {
        "city": "Würzburg (Krfr.St)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 49.79130439999999,
            "lng": 9.9533548
        },
        "data_by_year": [47, 45, 53, 69, 53, 46],
        "sum_over_all": 313
    }, {
        "city": "Aschaffenburg (Lkr)",
        "geo_data": {
            "lat": 49.9806625,
            "country": "de",
            "lng": 9.135555400000001,
            "region": "Bayern"
        },
        "data_by_year": [7, 5, 7, 7, 6, 10],
        "sum_over_all": 42
    }, {
        "city": "Bad Kissingen (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 50.2007337,
            "lng": 10.080392
        },
        "data_by_year": [6, 5, 7, 6, 13, 6],
        "sum_over_all": 43
    }, {
        "city": "Röhn-Grabfeld (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 50.3556944,
            "lng": 10.2066671            
        },
        "data_by_year": [10, 7, 3, 4, 10, 7],
        "sum_over_all": 41
    }, {
        "city": "Haßberge (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 50.236559,
            "lng": 10.8806004
        },
        "data_by_year": [8, 4, 5, 10, 6, 11],
        "sum_over_all": 44
    }, {
        "city": "Kitzingen (Lkr)",
        "geo_data": {
            "lat": 49.7340805,
            "country": "de",
            "lng": 10.1473777,
            "region": "Bayern"
        },
        "data_by_year": [9, 8, 7, 5, 9, 3],
        "sum_over_all": 41
    }, {
        "city": "Miltenberg (Lkr)",
        "geo_data": {
            "lat": 49.7019294,
            "country": "de",
            "lng": 9.2559214,
            "region": "Bayern"
        },
        "data_by_year": [9, 10, 2, 7, 8, 5],
        "sum_over_all": 41
    }, {
        "city": "Main-Spessart (Lkr)",
        "geo_data": {
            "lat": 49.9886154,
            "country": "de",
            "lng": 9.64155,
            "region": "Bayern"
        },
        "data_by_year": [9, 12, 23, 8, 8, 6],
        "sum_over_all": 66
    }, {
        "city": "Schweinfurt (Lkr)",
        "geo_data": {
            "lat": 50.0492047,
            "country": "de",
            "lng": 10.2194227,
            "region": "Bayern"
        },
        "data_by_year": [12, 11, 10, 12, 5, 5],
        "sum_over_all": 55
    }, {
        "city": "Würzburg (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 49.79130439999999,
            "lng": 9.9533548
        },
        "data_by_year": [13, 12, 18, 14, 25, 19],
        "sum_over_all": 101
    }, {
        "city": "Augsburg (Krfr.St)",
        "geo_data": {
            "lat": 48.3705449,
            "country": "de",
            "lng": 10.89779,
            "region": "Bayern"
        },
        "data_by_year": [58, 50, 47, 53, 59, 54],
        "sum_over_all": 321
    }, {
        "city": "Kaufbeuren (Krfr.St)",
        "geo_data": {
            "lat": 47.8830175,
            "country": "de",
            "lng": 10.625966,
            "region": "Bayern"
        },
        "data_by_year": [9, 7, 14, 12, 11, 11],
        "sum_over_all": 64
    }, {
        "city": "Kempten (Allgäu) (Krfr.St)",
        "geo_data": {
            "lat": 47.7285699,
            "country": "de",
            "lng": 10.3157835,
            "region": "Bayern"
        },
        "data_by_year": [12, 7, 14, 11, 10, 13],
        "sum_over_all": 67
    }, {
        "city": "Memmingen (Krfr.St)",
        "geo_data": {
            "lat": 47.9837999,
            "country": "de",
            "lng": 10.1801883,
            "region": "Bayern"
        },
        "data_by_year": [5, 2, 10, 5, 6, 9],
        "sum_over_all": 37
    }, {
        "city": "Aichach-Friedberg (Lkr)",
        "geo_data": {
            "lat": 48.3866143,
            "country": "de",
            "lng": 11.0698233,
            "region": "Bayern"
        },
        "data_by_year": [17, 15, 27, 20, 23, 28],
        "sum_over_all": 130
    }, {
        "city": "Augsburg (Lkr)",
        "geo_data": {
            "lat": 48.3705449,
            "country": "de",
            "lng": 10.89779,
            "region": "Bayern"
        },
        "data_by_year": [21, 23, 26, 29, 27, 27],
        "sum_over_all": 153
    }, {
        "city": "Dillingen a.d.Donau (Lkr)",
        "geo_data": {
            "lat": 48.5790918,
            "country": "de",
            "lng": 10.4940239,
            "region": "Bayern"
        },
        "data_by_year": [9, 20, 12, 13, 14, 12],
        "sum_over_all": 80
    }, {
        "city": "Günzburg (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 48.45284119999999,
            "lng": 10.2775127
        },
        "data_by_year": [15, 14, 8, 11, 6, 11],
        "sum_over_all": 65
    }, {
        "city": "Neu-Ulm (Lkr)",
        "geo_data": {
            "lat": 48.3906042,
            "country": "de",
            "lng": 10.0060398,
            "region": "Bayern"
        },
        "data_by_year": [15, 16, 11, 17, 15, 15],
        "sum_over_all": 89
    }, {
        "city": "Lindau (Bodensee) (Lkr)",
        "geo_data": {
            "lat": 47.5797815,
            "country": "de",
            "lng": 9.678933299999999,
            "region": "Bayern"
        },
        "data_by_year": [11, 16, 10, 11, 18, 18],
        "sum_over_all": 84
    }, {
        "city": "Ostallgäu (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 47.786013,
            "lng": 10.6305148
        },
        "data_by_year": [14, 15, 29, 21, 35, 29],
        "sum_over_all": 143
    }, {
        "city": "Unterallgäu (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 48.0455315,
            "lng": 10.4192481            
        },
        "data_by_year": [15, 20, 17, 14, 16, 16],
        "sum_over_all": 98
    }, {
        "city": "Donau-Ries (Lkr)",
        "geo_data": {
            "lat": 48.8261345,
            "country": "de",
            "lng": 10.7125556,
            "region": "Bayern"
        },
        "data_by_year": [22, 15, 24, 24, 13, 17],
        "sum_over_all": 115
    }, {
        "city": "Oberallgäu (Lkr)",
        "geo_data": {
            "country": "de",
            "region": "Bayern",
            "lat": 47.5391971,
            "lng": 10.2844016
        },
        "data_by_year": [9, 20, 20, 24, 11, 22],
        "sum_over_all": 106
    }, {
        "city": "Stadtverband Saarbrücken, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Saarland",
            "lat": 49.278856,
            "lng": 6.943689
        },
        "data_by_year": [1, 11, 9, 8, 13, 16],
        "sum_over_all": 58
    }, {
        "city": "Merzig-Wadern, Landkreis",
        "geo_data": {
            "lat": 49.4572396,
            "country": "de",
            "lng": 6.6866876,
            "region": "Saarland"
        },
        "data_by_year": [0, 3, 1, 5, 0, 0],
        "sum_over_all": 9
    }, {
        "city": "Neunkirchen, Landkreis",
        "geo_data": {
            "lat": 49.3518048,
            "country": "de",
            "lng": 7.186363,
            "region": "Saarland"
        },
        "data_by_year": [2, 0, 1, 1, 2, 1],
        "sum_over_all": 7
    }, {
        "city": "Saarlouis, Landkreis",
        "geo_data": {
            "lat": 49.3134606,
            "country": "de",
            "lng": 6.752286499999999,
            "region": "Saarland"
        },
        "data_by_year": [1, 3, 2, 4, 0, 1],
        "sum_over_all": 11
    }, {
        "city": "Saarpfalz-Kreis",
        "geo_data": {
            "lat": 49.1804828,
            "country": "de",
            "lng": 7.219358199999999,
            "region": "Saarland"
        },
        "data_by_year": [8, 0, 4, 11, 3, 4],
        "sum_over_all": 30
    }, {
        "city": "St. Wendel, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Saarland",
            "lat": 49.4677707,
            "lng": 7.169062499999999
        },
        "data_by_year": [0, 1, 1, 2, 2, 2],
        "sum_over_all": 8
    }, {
        "city": "Berlin, Stadt",
        "geo_data": {
            "lat": 52.52000659999999,
            "country": "de",
            "lng": 13.404954,
            "region": "Berlin"
        },
        "data_by_year": [124, 124, 135, 158, 130, 159],
        "sum_over_all": 830
    }, {
        "city": "Brandenburg an der Havel, Stadt",
        "geo_data": {
            "lat": 52.1313922,
            "country": "de",
            "lng": 13.2162494,
            "region": "Brandenburg"
        },
        "data_by_year": [1, 1, 1, 1, 1, 0],
        "sum_over_all": 5
    }, {
        "city": "Cottbus, Stadt",
        "geo_data": {
            "lat": 51.75631079999999,
            "country": "de",
            "lng": 14.3328679,
            "region": "Brandenburg"
        },
        "data_by_year": [1, 5, 4, 3, 5, 9],
        "sum_over_all": 27
    }, {
        "city": "Frankfurt (Oder), Stadt",
        "geo_data": {
            "lat": 50.1109221,
            "country": "de",
            "lng": 8.6821267,
            "region": "Hessen"
        },
        "data_by_year": [1, 0, 0, 1, 0, 1],
        "sum_over_all": 3
    }, {
        "city": "Potsdam, Stadt",
        "geo_data": {
            "lat": 52.3905689,
            "country": "de",
            "lng": 13.0644729,
            "region": "Brandenburg"
        },
        "data_by_year": [4, 5, 5, 3, 3, 6],
        "sum_over_all": 26
    }, {
        "city": "Barnim, Landkreis",
        "geo_data": {
            "lat": 52.85744529999999,
            "country": "de",
            "lng": 13.6998295,
            "region": "Brandenburg"
        },
        "data_by_year": [1, 0, 0, 3, 3, 0],
        "sum_over_all": 7
    }, {
        "city": "Dahme-Spreewald, Landkreis",
        "geo_data": {
            "lat": 52.0163129,
            "country": "de",
            "lng": 13.832727,
            "region": "Brandenburg"
        },
        "data_by_year": [3, 2, 2, 0, 1, 6],
        "sum_over_all": 14
    }, {
        "city": "Elbe-Elster, Landkreis",
        "geo_data": {
            "lat": 51.6840663,
            "country": "de",
            "lng": 13.3627715,
            "region": "Brandenburg"
        },
        "data_by_year": [1, 4, 3, 0, 1, 1],
        "sum_over_all": 10
    }, {
        "city": "Havelland, Landkreis",
        "geo_data": {
            "lat": 52.5979018,
            "country": "de",
            "lng": 12.5204131,
            "region": "Brandenburg"
        },
        "data_by_year": [2, 0, 4, 1, 2, 6],
        "sum_over_all": 15
    }, {
        "city": "Mrkisch-Oderland, Landkreis",
        "geo_data": {
            "lat": 52.6364233,
            "country": "de",
            "lng": 14.0892616,
            "region": "Brandenburg"
        },
        "data_by_year": [2, 2, 5, 2, 3, 3],
        "sum_over_all": 17
    }, {
        "city": "Oberhavel, Landkreis",
        "geo_data": {
            "lat": 52.9120644,
            "country": "de",
            "lng": 13.2256701,
            "region": "Brandenburg"
        },
        "data_by_year": [3, 2, 4, 0, 5, 3],
        "sum_over_all": 17
    }, {
        "city": "Oberspreewald-Lausitz, Landkreis",
        "geo_data": {
            "lat": 51.569088,
            "country": "de",
            "lng": 13.9716791,
            "region": "Brandenburg"
        },
        "data_by_year": [3, 1, 4, 3, 2, 3],
        "sum_over_all": 16
    }, {
        "city": "Oder-Spree, Landkreis",
        "geo_data": {
            "lat": 52.2805259,
            "country": "de",
            "lng": 14.1541989,
            "region": "Brandenburg"
        },
        "data_by_year": [3, 3, 3, 2, 1, 6],
        "sum_over_all": 18
    }, {
        "city": "Ostprignitz-Ruppin, Landkreis",
        "geo_data": {
            "lat": 52.9645366,
            "country": "de",
            "lng": 12.7526723,
            "region": "Brandenburg"
        },
        "data_by_year": [1, 2, 0, 2, 0, 0],
        "sum_over_all": 5
    }, {
        "city": "Potsdam-Mittelmark, Landkreis",
        "geo_data": {
            "lat": 52.2523981,
            "country": "de",
            "lng": 12.9084119,
            "region": "Brandenburg"
        },
        "data_by_year": [2, 4, 3, 3, 2, 2],
        "sum_over_all": 16
    }, {
        "city": "Prignitz, Landkreis",
        "geo_data": {
            "lat": 53.0392549,
            "country": "de",
            "lng": 12.0455484,
            "region": "Brandenburg"
        },
        "data_by_year": [1, 1, 0, 0, 4, 2],
        "sum_over_all": 8
    }, {
        "city": "Spree-Neiße, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Brandenburg",
            "lat": 51.7545408,
            "lng": 14.5586959
        },
        "data_by_year": [7, 1, 1, 1, 1, 0],
        "sum_over_all": 11
    }, {
        "city": "Teltow-Flming, Landkreis",
        "geo_data": {
            "lat": 52.0364157,
            "country": "de",
            "lng": 13.2920443,
            "region": "Brandenburg"
        },
        "data_by_year": [4, 2, 0, 1, 2, 3],
        "sum_over_all": 12
    }, {
        "city": "Uckermark, Landkreis",
        "geo_data": {
            "lat": 53.1879937,
            "country": "de",
            "lng": 13.8685909,
            "region": "Brandenburg"
        },
        "data_by_year": [0, 2, 6, 0, 1, 0],
        "sum_over_all": 9
    }, {
        "city": "Greifswald, Hansestadt",
        "geo_data": {
            "lat": 54.08654629999999,
            "country": "de",
            "lng": 13.3923414,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [5, 0, 0, 0, 0, 0],
        "sum_over_all": 5
    }, {
        "city": "Neubrandenburg, Stadt",
        "geo_data": {
            "lat": 53.5678292,
            "country": "de",
            "lng": 13.2779269,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [3, 0, 0, 0, 0, 0],
        "sum_over_all": 3
    }, {
        "city": "Rostock, Hansestadt",
        "geo_data": {
            "lat": 54.0924406,
            "country": "de",
            "lng": 12.0991466,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [3, 9, 5, 7, 5, 12],
        "sum_over_all": 41
    }, {
        "city": "Schwerin, Landeshauptstadt",
        "geo_data": {
            "lat": 53.6355022,
            "country": "de",
            "lng": 11.4012499,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [2, 1, 1, 1, 1, 0],
        "sum_over_all": 6
    }, {
        "city": "Stralsund, Hansestadt",
        "geo_data": {
            "lat": 54.30906539999999,
            "country": "de",
            "lng": 13.0770347,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Wismar, Hansestadt",
        "geo_data": {
            "lat": 53.8979416,
            "country": "de",
            "lng": 11.4516022,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Bad Doberan, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Mecklenburg-Vorpommern",
            "lat": 54.1028317,
            "lng": 11.9086
        },
        "data_by_year": [3, 0, 0, 0, 0, 0],
        "sum_over_all": 3
    }, {
        "city": "Demmin, Landkreis",
        "geo_data": {
            "lat": 53.9056285,
            "country": "de",
            "lng": 13.0498413,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Güstrow, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Mecklenburg-Vorpommern",
            "lat": 53.8031547,
            "lng": 12.1895377
        },
        "data_by_year": [2, 0, 0, 0, 0, 0],
        "sum_over_all": 2
    }, {
        "city": "Ludwigslust, Landkreis",
        "geo_data": {
            "lat": 53.3244914,
            "country": "de",
            "lng": 11.4969238,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [1, 0, 0, 0, 0, 0],
        "sum_over_all": 1
    }, {
        "city": "Mecklenburg-Strelitz, Landkreis",
        "geo_data": {
            "lat": 53.38895609999999,
            "country": "de",
            "lng": 13.2708026,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Müritz, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Mecklenburg-Vorpommern",
            "lat": 53.4188888,
            "lng": 12.7010764
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Nordvorpommern, Landkreis",
        "geo_data": {
            "lat": 54.1887286,
            "country": "de",
            "lng": 12.8281882,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [1, 0, 0, 0, 0, 0],
        "sum_over_all": 1
    }, {
        "city": "Nordwestmecklenburg, Landkreis",
        "geo_data": {
            "lat": 53.8281668,
            "country": "de",
            "lng": 11.1486686,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Ostvorpommern, Landkreis",
        "geo_data": {
            "lat": 53.9596515,
            "country": "de",
            "lng": 13.6857825,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [2, 0, 0, 0, 0, 0],
        "sum_over_all": 2
    }, {
        "city": "Parchim, Landkreis",
        "geo_data": {
            "lat": 53.4250382,
            "country": "de",
            "lng": 11.8478394,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Rügen, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Mecklenburg-Vorpommern",
            "lat": 54.3519967,
            "lng": 13.3630491
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Uecker-Randow, Landkreis",
        "geo_data": {
            "lat": 53.5539654,
            "country": "de",
            "lng": 14.1232591,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Mecklenburgische Seenplatte, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Mecklenburg-Vorpommern",
            "lat": 53.5609872,
            "lng": 12.9106549
        },
        "data_by_year": [0, 1, 6, 3, 2, 1],
        "sum_over_all": 13
    }, {
        "city": "Landkreis Rostock, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Mecklenburg-Vorpommern",
            "lat": 53.9026477,
            "lng": 12.1835467
            
        },
        "data_by_year": [0, 1, 2, 7, 1, 2],
        "sum_over_all": 13
    }, {
        "city": "Vorpommern-Rügen, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Mecklenburg-Vorpommern",
            "lat": 54.31869,
            "lng": 13.08528
        },
        "data_by_year": [0, 3, 1, 2, 0, 2],
        "sum_over_all": 8
    }, {
        "city": "Nordwestmecklenburg, Landkreis",
        "geo_data": {
            "lat": 53.8281668,
            "country": "de",
            "lng": 11.1486686,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 0, 4, 1, 2, 4],
        "sum_over_all": 11
    }, {
        "city": "Vorpommern-Greifswald, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Mecklenburg-Vorpommern",
            "lat": 54.0862323,
            "lng": 13.3891975
        },
        "data_by_year": [0, 4, 12, 2, 6, 7],
        "sum_over_all": 31
    }, {
        "city": "Ludwigslust-Parchim, Landkreis",
        "geo_data": {
            "lat": 53.4250543,
            "country": "de",
            "lng": 11.8478325,
            "region": "Mecklenburg-Vorpommern"
        },
        "data_by_year": [0, 3, 1, 2, 0, 7],
        "sum_over_all": 13
    }, {
        "city": "Chemnitz, Stadt",
        "geo_data": {
            "lat": 50.827845,
            "country": "de",
            "lng": 12.9213697,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Plauen, Stadt",
        "geo_data": {
            "lat": 50.4976133,
            "country": "de",
            "lng": 12.1368679,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Zwickau, Stadt",
        "geo_data": {
            "lat": 50.7102169,
            "country": "de",
            "lng": 12.4733725,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Chemnitzer Land, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Sachsen",
            "lat": 50.80813,
            "lng": 12.9631
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Freiberg, Landkreis",
        "geo_data": {
            "lat": 50.9128283,
            "country": "de",
            "lng": 13.341727,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Vogtlandkreis",
        "geo_data": {
            "lat": 50.4884351,
            "country": "de",
            "lng": 12.2774996,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Mittlerer Erzgebirgskreis",
        "geo_data": {
            "country": "de",
            "region": "Sachsen",
            "lat": 50.7346571,
            "lng": 13.0462577
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Mittweida, Landkreis",
        "geo_data": {
            "lat": 50.9853149,
            "country": "de",
            "lng": 12.9740557,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Stollberg, Landkreis",
        "geo_data": {
            "lat": 50.70918469999999,
            "country": "de",
            "lng": 12.7750105,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Aue-Schwarzenberg, Landkreis",
        "geo_data": {
            "lat": 50.5554431,
            "country": "de",
            "lng": 12.7847262,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Zwickauer Land, Landkreis",
        "geo_data": {
            "lat": 50.7102169,
            "country": "de",
            "lng": 12.4733725,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Dresden, Stadt",
        "geo_data": {
            "lat": 51.0504088,
            "country": "de",
            "lng": 13.7372621,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Görlitz, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Sachsen",
            "lat": 51.1506269,
            "lng": 14.968707
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Hoyerswerda, Stadt",
        "geo_data": {
            "lat": 51.4388605,
            "country": "de",
            "lng": 14.2536419,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Bautzen, Landkreis",
        "geo_data": {
            "lat": 51.18229299999999,
            "country": "de",
            "lng": 14.4237749,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    },{
        "city": "Torgau-Oschatz, Landkreis",
        "geo_data": {
            "lat": 51.5582,
            "country": "de",
            "lng": 12.96307,
            "region": "Sachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Chemnitz, Stadt",
        "geo_data": {
            "lat": 50.827845,
            "country": "de",
            "lng": 12.9213697,
            "region": "Sachsen"
        },
        "data_by_year": [11, 14, 9, 11, 19, 35],
        "sum_over_all": 99
    }, {
        "city": "Erzgebirgskreis",
        "geo_data": {
            "lat": 50.5547583,
            "country": "de",
            "lng": 12.8252454,
            "region": "Sachsen"
        },
        "data_by_year": [9, 12, 12, 10, 11, 12],
        "sum_over_all": 66
    }, {
        "city": "Mittelsachsen, Landkreis",
        "geo_data": {
            "lat": 50.9900976,
            "country": "de",
            "lng": 13.0880514,
            "region": "Sachsen"
        },
        "data_by_year": [7, 12, 6, 3, 11, 8],
        "sum_over_all": 47
    }, {
        "city": "Vogtlandkreis",
        "geo_data": {
            "lat": 50.4884351,
            "country": "de",
            "lng": 12.2774996,
            "region": "Sachsen"
        },
        "data_by_year": [13, 14, 15, 13, 12, 9],
        "sum_over_all": 76
    }, {
        "city": "Zwickau, Landkreis",
        "geo_data": {
            "lat": 50.7102169,
            "country": "de",
            "lng": 12.4733725,
            "region": "Sachsen"
        },
        "data_by_year": [14, 11, 12, 7, 11, 10],
        "sum_over_all": 65
    }, {
        "city": "Dresden, Stadt",
        "geo_data": {
            "lat": 51.0504088,
            "country": "de",
            "lng": 13.7372621,
            "region": "Sachsen"
        },
        "data_by_year": [29, 19, 29, 21, 52, 37],
        "sum_over_all": 187
    }, {
        "city": "Bautzen, Landkreis",
        "geo_data": {
            "lat": 51.18229299999999,
            "country": "de",
            "lng": 14.4237749,
            "region": "Sachsen"
        },
        "data_by_year": [9, 6, 7, 9, 7, 2],
        "sum_over_all": 40
    }, {
        "city": "Görlitz, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Sachsen",
            "lat": 51.1506269,
            "lng": 14.968707
        },
        "data_by_year": [6, 5, 13, 12, 5, 4],
        "sum_over_all": 45
    }, {
        "city": "Meißen, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Sachsen",
            "lat": 51.1617842,
            "lng": 13.4976592
        },
        "data_by_year": [5, 5, 8, 3, 6, 7],
        "sum_over_all": 34
    }, {
        "city": "Sächsische Schweiz-Osterzgebirge, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Sachsen",
            "lat": 50.8981957,
            "lng": 13.8716325
        },
        "data_by_year": [3, 6, 2, 7, 6, 7],
        "sum_over_all": 31
    }, {
        "city": "Leipzig, Stadt",
        "geo_data": {
            "lat": 51.3396955,
            "country": "de",
            "lng": 12.3730747,
            "region": "Sachsen"
        },
        "data_by_year": [23, 30, 18, 25, 32, 45],
        "sum_over_all": 173
    }, {
        "city": "Leipzig, Landkreis",
        "geo_data": {
            "lat": 51.3396955,
            "country": "de",
            "lng": 12.3730747,
            "region": "Sachsen"
        },
        "data_by_year": [5, 3, 7, 2, 3, 3],
        "sum_over_all": 23
    }, {
        "city": "Nordsachsen, Landkreis",
        "geo_data": {
            "lat": 51.5385972,
            "country": "de",
            "lng": 12.7541738,
            "region": "Sachsen"
        },
        "data_by_year": [7, 3, 5, 2, 5, 1],
        "sum_over_all": 23
    }, {
        "city": "Dessau-Roßlau, Stadt",
        "geo_data": {
            "country": "de",
            "region": "Sachsen-Anhalt",
            "lat": 51.84282779999999,
            "lng": 12.2303935
        },
        "data_by_year": [2, 2, 1, 2, 0, 0],
        "sum_over_all": 7
    }, {
        "city": "Halle (Saale), Stadt",
        "geo_data": {
            "lat": 51.4969802,
            "country": "de",
            "lng": 11.9688029,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [5, 9, 5, 9, 5, 9],
        "sum_over_all": 42
    }, {
        "city": "Magdeburg, Landeshauptstadt",
        "geo_data": {
            "lat": 52.1205333,
            "country": "de",
            "lng": 11.6276237,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [8, 10, 14, 15, 5, 11],
        "sum_over_all": 63
    }, {
        "city": "Altmarkkreis Salzwedel",
        "geo_data": {
            "lat": 52.7747049,
            "country": "de",
            "lng": 11.202885,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 2, 2, 1, 1, 0],
        "sum_over_all": 6
    }, {
        "city": "Anhalt-Bitterfeld",
        "geo_data": {
            "lat": 51.7866203,
            "country": "de",
            "lng": 12.0355724,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [3, 10, 6, 2, 2, 3],
        "sum_over_all": 26
    }, {
        "city": "Börde",
        "geo_data": {
            "country": "de",
            "region": "Sachsen-Anhalt",
            "lat": 52.2316616,
            "lng": 11.4556177
        },
        "data_by_year": [3, 4, 3, 1, 0, 2],
        "sum_over_all": 13
    }, {
        "city": "Burgenlandkreis",
        "geo_data": {
            "lat": 51.1224831,
            "country": "de",
            "lng": 11.8641865,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [2, 7, 3, 7, 4, 3],
        "sum_over_all": 26
    }, {
        "city": "Harz",
        "geo_data": {
            "lat": 51.75,
            "country": "de",
            "lng": 10.633333,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [4, 2, 1, 3, 0, 6],
        "sum_over_all": 16
    }, {
        "city": "Jerichower Land",
        "geo_data": {
            "lat": 52.5000177,
            "country": "de",
            "lng": 12.0275965,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [1, 0, 2, 0, 1, 0],
        "sum_over_all": 4
    }, {
        "city": "Mansfeld-Südharz",
        "geo_data": {
            "country": "de",
            "region": "Sachsen-Anhalt",
            "lat": 51.5509411,
            "lng": 11.4071798
        },
        "data_by_year": [2, 3, 1, 2, 2, 5],
        "sum_over_all": 15
    }, {
        "city": "Saalekreis",
        "geo_data": {
            "lat": 51.37795000000001,
            "country": "de",
            "lng": 11.857969,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [1, 1, 3, 1, 2, 2],
        "sum_over_all": 10
    }, {
        "city": "Salzlandkreis",
        "geo_data": {
            "lat": 51.8325635,
            "country": "de",
            "lng": 11.5833881,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [3, 4, 9, 4, 5, 2],
        "sum_over_all": 27
    }, {
        "city": "Stendal",
        "geo_data": {
            "lat": 52.6041444,
            "country": "de",
            "lng": 11.8517729,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 4, 2, 4, 1, 0],
        "sum_over_all": 11
    }, {
        "city": "Wittenberg",
        "geo_data": {
            "country": "de",
            "region": "Sachsen-Anhalt",
            "lat": 51.8739831,
            "lng": 12.6279659
        },
        "data_by_year": [2, 1, 2, 2, 2, 2],
        "sum_over_all": 11
    }, {
        "city": "Dessau, Stadt",
        "geo_data": {
            "lat": 51.83081660000001,
            "country": "de",
            "lng": 12.2423302,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Anhalt-Zerbst, Landkreis",
        "geo_data": {
            "lat": 51.9669481,
            "country": "de",
            "lng": 12.0846211,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Bernburg, Landkreis",
        "geo_data": {
            "lat": 51.7833579,
            "country": "de",
            "lng": 11.7537327,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Bitterfeld, Landkreis",
        "geo_data": {
            "lat": 51.6265334,
            "country": "de",
            "lng": 12.3133061,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Köthen, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Sachsen-Anhalt",
            "lat": 51.7505762,
            "lng": 11.9802357
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Halle (Saale), Stadt",
        "geo_data": {
            "lat": 51.4969802,
            "country": "de",
            "lng": 11.9688029,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Burgenlandkreis",
        "geo_data": {
            "lat": 51.1224831,
            "country": "de",
            "lng": 11.8641865,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Mansfelder Land, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Sachsen-Anhalt",
            "lat": 51.4225012,
            "lng": 11.555189
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Merseburg-Querfurt, Landkreis",
        "geo_data": {
            "lat": 51.3467485,
            "country": "de",
            "lng": 11.9786197,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Saalkreis",
        "geo_data": {
            "lat": 51.37795000000001,
            "country": "de",
            "lng": 11.857969,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Sangerhausen, Landkreis",
        "geo_data": {
            "lat": 51.4725415,
            "country": "de",
            "lng": 11.2995045,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Weißenfels, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Sachsen-Anhalt",
            "lat": 51.1972771,
            "lng": 11.9689146
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Magdeburg, Landeshauptstadt",
        "geo_data": {
            "lat": 52.1205333,
            "country": "de",
            "lng": 11.6276237,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    },{
        "city": "Jerichower Land, Landkreis",
        "geo_data": {
            "lat": 52.5000177,
            "country": "de",
            "lng": 12.0275965,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    },{
        "city": "Stendal, Landkreis",
        "geo_data": {
            "lat": 52.6041444,
            "country": "de",
            "lng": 11.8517729,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Quedlinburg, Landkreis",
        "geo_data": {
            "lat": 51.7920562,
            "country": "de",
            "lng": 11.141448,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Schnebeck, Landkreis",
        "geo_data": {
            "lat": 52.65754,
            "country": "de",
            "lng": 7.29754,
            "region": "Niedersachsen"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Wernigerode, Landkreis",
        "geo_data": {
            "lat": 51.8368113,
            "country": "de",
            "lng": 10.7844266,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Altmarkkreis Salzwedel",
        "geo_data": {
            "lat": 52.7747049,
            "country": "de",
            "lng": 11.202885,
            "region": "Sachsen-Anhalt"
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Erfurt, Stadt",
        "geo_data": {
            "lat": 50.98476789999999,
            "country": "de",
            "lng": 11.02988,
            "region": "Thüringen"
        },
        "data_by_year": [5, 7, 25, 13, 9, 16],
        "sum_over_all": 75
    }, {
        "city": "Gera, Stadt",
        "geo_data": {
            "lat": 50.8850706,
            "country": "de",
            "lng": 12.0807203,
            "region": "Thüringen"
        },
        "data_by_year": [2, 3, 5, 2, 3, 3],
        "sum_over_all": 18
    }, {
        "city": "Jena, Stadt",
        "geo_data": {
            "lat": 50.927054,
            "country": "de",
            "lng": 11.5892372,
            "region": "Thüringen"
        },
        "data_by_year": [15, 14, 15, 12, 8, 4],
        "sum_over_all": 68
    }, {
        "city": "Suhl, Stadt",
        "geo_data": {
            "lat": 50.6076846,
            "country": "de",
            "lng": 10.6881255,
            "region": "Thüringen"
        },
        "data_by_year": [2, 3, 0, 2, 0, 1],
        "sum_over_all": 8
    }, {
        "city": "Weimar, Stadt",
        "geo_data": {
            "lat": 50.9794934,
            "country": "de",
            "lng": 11.3235439,
            "region": "Thüringen"
        },
        "data_by_year": [4, 6, 2, 1, 6, 8],
        "sum_over_all": 27
    }, {
        "city": "Eisenach, Stadt",
        "geo_data": {
            "lat": 50.9795715,
            "country": "de",
            "lng": 10.3146872,
            "region": "Thüringen"
        },
        "data_by_year": [0, 0, 1, 3, 0, 2],
        "sum_over_all": 6
    }, {
        "city": "Eichsfeld, Landkreis",
        "geo_data": {
            "lat": 51.36189419999999,
            "country": "de",
            "lng": 10.2428459,
            "region": "Thüringen"
        },
        "data_by_year": [0, 2, 0, 1, 1, 2],
        "sum_over_all": 6
    }, {
        "city": "Nordhausen, Landkreis",
        "geo_data": {
            "lat": 51.4990791,
            "country": "de",
            "lng": 10.791581,
            "region": "Thüringen"
        },
        "data_by_year": [1, 2, 1, 9, 3, 1],
        "sum_over_all": 17
    }, {
        "city": "Wartburgkreis",
        "geo_data": {
            "lat": 50.8615247,
            "country": "de",
            "lng": 10.1708203,
            "region": "Thüringen"
        },
        "data_by_year": [1, 3, 0, 3, 1, 2],
        "sum_over_all": 10
    }, {
        "city": "Unstrut-Hainich-Kreis",
        "geo_data": {
            "lat": 51.1686553,
            "country": "de",
            "lng": 10.5099608,
            "region": "Thüringen"
        },
        "data_by_year": [1, 1, 6, 0, 1, 2],
        "sum_over_all": 11
    }, {
        "city": "Kyffhäuserkreis",
        "geo_data": {
            "country": "de",
            "region": "Thüringen",
            "lat": 51.3018007,
            "lng": 10.9027952
        },
        "data_by_year": [0, 1, 1, 1, 1, 0],
        "sum_over_all": 4
    }, {
        "city": "Schmalkalden-Meiningen, Landkreis",
        "geo_data": {
            "lat": 50.6343486,
            "country": "de",
            "lng": 10.3649026,
            "region": "Thüringen"
        },
        "data_by_year": [3, 5, 1, 10, 6, 3],
        "sum_over_all": 28
    }, {
        "city": "Gotha, Landkreis",
        "geo_data": {
            "lat": 50.9469188,
            "country": "de",
            "lng": 10.7092884,
            "region": "Thüringen"
        },
        "data_by_year": [0, 1, 4, 1, 5, 2],
        "sum_over_all": 13
    }, {
        "city": "Sömmerda, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Thüringen",
            "lat": 51.1613676,
            "lng": 11.1263427
        },
        "data_by_year": [3, 3, 2, 0, 0, 2],
        "sum_over_all": 10
    }, {
        "city": "Hildburghausen, Landkreis",
        "geo_data": {
            "lat": 50.4263293,
            "country": "de",
            "lng": 10.7312097,
            "region": "Thüringen"
        },
        "data_by_year": [6, 1, 2, 0, 2, 2],
        "sum_over_all": 13
    }, {
        "city": "Ilm-Kreis",
        "geo_data": {
            "lat": 50.71130059999999,
            "country": "de",
            "lng": 10.8970001,
            "region": "Thüringen"
        },
        "data_by_year": [5, 3, 6, 3, 10, 1],
        "sum_over_all": 28
    }, {
        "city": "Weimarer Land, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Thüringen",
            "lat": 51.0165423,
            "lng": 11.4454373
        },
        "data_by_year": [1, 2, 2, 0, 1, 2],
        "sum_over_all": 8
    }, {
        "city": "Sonneberg, Landkreis",
        "geo_data": {
            "lat": 50.3601821,
            "country": "de",
            "lng": 11.1709899,
            "region": "Thüringen"
        },
        "data_by_year": [8, 2, 3, 0, 0, 5],
        "sum_over_all": 18
    }, {
        "city": "Saalfeld-Rudolstadt, Landkreis",
        "geo_data": {
            "lat": 50.6694981,
            "country": "de",
            "lng": 11.3311193,
            "region": "Thüringen"
        },
        "data_by_year": [8, 2, 5, 3, 4, 2],
        "sum_over_all": 24
    }, {
        "city": "Saale-Holzland-Kreis",
        "geo_data": {
            "lat": 50.87930670000001,
            "country": "de",
            "lng": 11.7602014,
            "region": "Thüringen"
        },
        "data_by_year": [1, 1, 0, 2, 4, 3],
        "sum_over_all": 11
    }, {
        "city": "Saale-Orla-Kreis",
        "geo_data": {
            "lat": 50.5453057,
            "country": "de",
            "lng": 11.7325505,
            "region": "Thüringen"
        },
        "data_by_year": [1, 1, 1, 0, 4, 4],
        "sum_over_all": 11
    }, {
        "city": "Greiz, Landkreis",
        "geo_data": {
            "lat": 50.6585555,
            "country": "de",
            "lng": 12.2077126,
            "region": "Thüringen"
        },
        "data_by_year": [4, 7, 3, 5, 1, 2],
        "sum_over_all": 22
    }, {
        "city": "Altenburger Land, Landkreis",
        "geo_data": {
            "country": "de",
            "region": "Thüringen",
            "lat": 50.9832693,
            "lng": 12.3829246
        },
        "data_by_year": [0, 7, 1, 1, 0, 1],
        "sum_over_all": 10
    },{
        "city": "Belgien",
        "geo_data": {
            "lat": 50.503887,
            "country": "Belgien",
            "lng": 4.469936
        },
        "data_by_year": [6, 2, 9, 11, 16, 8],
        "sum_over_all": 52
    }, {
        "city": "Dänemark",
        "geo_data": {
            "country": "Dänemark",
            "lat": 56.26392,
            "lng": 9.501785
        },
        "data_by_year": [5, 0, 1, 2, 6, 1],
        "sum_over_all": 15
    }, {
        "city": "Finnland",
        "geo_data": {
            "lat": 61.92410999999999,
            "country": "Finnland",
            "lng": 25.7481511
        },
        "data_by_year": [7, 16, 16, 18, 25, 18],
        "sum_over_all": 100
    }, {
        "city": "Frankreich",
        "geo_data": {
            "lat": 46.227638,
            "country": "Frankreich",
            "lng": 2.213749
        },
        "data_by_year": [109, 82, 77, 101, 96, 129],
        "sum_over_all": 594
    }, {
        "city": "Griechenland",
        "geo_data": {
            "lat": 39.074208,
            "country": "Griechenland",
            "lng": 21.824312
        },
        "data_by_year": [12, 27, 43, 37, 55, 90],
        "sum_over_all": 264
    }, {
        "city": "Großbritannien und Nordirland",
        "geo_data": {
            "lat": 53.7190281,
            "country": "Großbritannien",
            "lng": -2.0727839
        },
        "data_by_year": [48, 53, 44, 41, 47, 43],
        "sum_over_all": 276
    }, {
        "city": "Italien",
        "geo_data": {
            "lat": 41.87194,
            "country": "Italien",
            "lng": 12.56738
        },
        "data_by_year": [98, 103, 184, 199, 219, 243],
        "sum_over_all": 1046
    }, {
        "city": "Irland",
        "geo_data": {
            "country": "Irland",
            "lat": 53.41291,
            "lng": -8.24389
        },
        "data_by_year": [12, 11, 14, 6, 9, 21],
        "sum_over_all": 73
    }, {
        "city": "Luxemburg",
        "geo_data": {
            "lat": 49.815273,
            "country": "Luxemburg",
            "lng": 6.129582999999999
        },
        "data_by_year": [5, 0, 2, 0, 3, 2],
        "sum_over_all": 12
    }, {
        "city": "Niederlande",
        "geo_data": {
            "lat": 52.132633,
            "country": "Niederlande",
            "lng": 5.291265999999999
        },
        "data_by_year": [11, 13, 13, 87, 18, 19],
        "sum_over_all": 161
    }, {
        "city": "Österreich",
        "geo_data": {
            "country": "Österreich",
            "lat": 47.516231,
            "lng": 14.550072
        },
        "data_by_year": [68, 89, 86, 67, 74, 113],
        "sum_over_all": 497
    }, {
        "city": "Portugal",
        "geo_data": {
            "lat": 39.39987199999999,
            "country": "Portugal",
            "lng": -8.224454
        },
        "data_by_year": [8, 14, 46, 28, 27, 19],
        "sum_over_all": 142
    }, {
        "city": "Schweden",
        "geo_data": {
            "lat": 60.12816100000001,
            "country": "Schweden",
            "lng": 18.643501
        },
        "data_by_year": [4, 4, 6, 2, 2, 10],
        "sum_over_all": 28
    }, {
        "city": "Spanien",
        "geo_data": {
            "lat": 40.46366700000001,
            "country": "Spanien",
            "lng": -3.74922
        },
        "data_by_year": [64, 94, 145, 151, 162, 130],
        "sum_over_all": 746
    }, {
        "city": "Bosnien und Herzegowina",
        "geo_data": {
            "lat": 43.915886,
            "country": "Bosnien",
            "lng": 17.679076
        },
        "data_by_year": [7, 6, 13, 9, 21, 32],
        "sum_over_all": 88
    }, {
        "city": "Bulgarien",
        "geo_data": {
            "lat": 42.733883,
            "country": "Bulgarien",
            "lng": 25.48583
        },
        "data_by_year": [149, 176, 231, 201, 274, 348],
        "sum_over_all": 1379
    }, {
        "city": "Serbien und Montenegro (ab 1.1.2004)",
        "geo_data": {
            "lat": 44.016521,
            "country": "Serbien",
            "lng": 21.005859
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Serbien (ab 01.08.2006)",
        "geo_data": {
            "lat": 44.016521,
            "country": "Serbien",
            "lng": 21.005859
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Serbien ohne Kosovo (ab 01.05.2008)",
        "geo_data": {
            "lat": 44.016521,
            "country": "Serbien",
            "lng": 21.005859
        },
        "data_by_year": [13, 17, 24, 23, 12, 31],
        "sum_over_all": 120
    }, {
        "city": "Kosovo (ab 01.05.2008)",
        "geo_data": {
            "lat": 42.6026359,
            "country": "Kosovo",
            "lng": 20.902977
        },
        "data_by_year": [18, 21, 15, 22, 23, 75],
        "sum_over_all": 174
    }, {
        "city": "Montenegro (ab 01.08.2006)",
        "geo_data": {
            "lat": 42.708678,
            "country": "Montenegro",
            "lng": 19.37439
        },
        "data_by_year": [1, 2, 1, 0, 1, 2],
        "sum_over_all": 7
    }, {
        "city": "Estland",
        "geo_data": {
            "lat": 58.595272,
            "country": "Estland",
            "lng": 25.0136071
        },
        "data_by_year": [1, 4, 2, 0, 6, 1],
        "sum_over_all": 14
    }, {
        "city": "Island",
        "geo_data": {
            "lat": 64.963051,
            "country": "Island",
            "lng": -19.020835
        },
        "data_by_year": [0, 0, 0, 0, 1, 0],
        "sum_over_all": 1
    }, {
        "city": "Kroatien",
        "geo_data": {
            "lat": 45.1,
            "country": "Kroatien",
            "lng": 15.2000001
        },
        "data_by_year": [12, 21, 36, 62, 93, 166],
        "sum_over_all": 390
    }, {
        "city": "Lettland",
        "geo_data": {
            "lat": 56.879635,
            "country": "Lettland",
            "lng": 24.603189
        },
        "data_by_year": [7, 6, 11, 17, 5, 5],
        "sum_over_all": 51
    }, {
        "city": "Litauen",
        "geo_data": {
            "lat": 55.169438,
            "country": "Litauen",
            "lng": 23.881275
        },
        "data_by_year": [5, 7, 9, 4, 3, 5],
        "sum_over_all": 33
    }, {
        "city": "Mazedonien",
        "geo_data": {
            "lat": 41.608635,
            "country": "Mazedonien",
            "lng": 21.745275
        },
        "data_by_year": [9, 4, 6, 10, 37, 24],
        "sum_over_all": 90
    }, {
        "city": "Moldau, Republik",
        "geo_data": {
            "lat": 49.4784933,
            "country": "Moldau",
            "lng": 14.0241146
        },
        "data_by_year": [2, 3, 4, 2, 2, 4],
        "sum_over_all": 17
    }, {
        "city": "Norwegen",
        "geo_data": {
            "lat": 60.47202399999999,
            "country": "Norwegen",
            "lng": 8.468945999999999
        },
        "data_by_year": [4, 4, 2, 7, 2, 7],
        "sum_over_all": 26
    }, {
        "city": "Polen",
        "geo_data": {
            "lat": 51.919438,
            "country": "Polen",
            "lng": 19.145136
        },
        "data_by_year": [109, 158, 198, 175, 223, 209],
        "sum_over_all": 1072
    }, {
        "city": "Rumänien",
        "geo_data": {
            "country": "Rumänien"
        },
        "data_by_year": [254, 353, 329, 332, 438, 672],
        "sum_over_all": 2378
    }, {
        "city": "Russische Förderation",
        "geo_data": {
            "country": "Russische Förderation"
        },
        "data_by_year": [65, 40, 46, 65, 62, 60],
        "sum_over_all": 338
    }, {
        "city": "Schweiz",
        "geo_data": {
            "lat": 46.818188,
            "country": "Schweiz",
            "lng": 8.227511999999999
        },
        "data_by_year": [32, 31, 30, 20, 28, 25],
        "sum_over_all": 166
    }, {
        "city": "Slowakei",
        "geo_data": {
            "lat": 48.669026,
            "country": "Slowakei",
            "lng": 19.699024
        },
        "data_by_year": [39, 148, 83, 59, 55, 61],
        "sum_over_all": 445
    }, {
        "city": "Slowenien",
        "geo_data": {
            "lat": 46.151241,
            "country": "Slowenien",
            "lng": 14.995463
        },
        "data_by_year": [2, 9, 14, 14, 11, 27],
        "sum_over_all": 77
    }, {
        "city": "Tschechien",
        "geo_data": {
            "lat": 49.81749199999999,
            "country": "Tschechien",
            "lng": 15.472962
        },
        "data_by_year": [89, 121, 142, 123, 142, 160],
        "sum_over_all": 777
    }, {
        "city": "Türkei",
        "geo_data": {
            "country": "Türkei"
        },
        "data_by_year": [104, 153, 146, 166, 93, 76],
        "sum_over_all": 738
    }, {
        "city": "Ukraine",
        "geo_data": {
            "lat": 48.379433,
            "country": "Ukraine",
            "lng": 31.1655799
        },
        "data_by_year": [29, 28, 40, 23, 44, 38],
        "sum_over_all": 202
    }, {
        "city": "Ungarn",
        "geo_data": {
            "lat": 47.162494,
            "country": "Ungarn",
            "lng": 19.5033041
        },
        "data_by_year": [65, 176, 228, 373, 385, 264],
        "sum_over_all": 1491
    }, {
        "city": "Weißrussland",
        "geo_data": {
            "lat": 53.709807,
            "country": "Weißrussland",
            "lng": 27.953389
        },
        "data_by_year": [4, 9, 2, 3, 4, 4],
        "sum_over_all": 26
    }, {
        "city": "Ehem. Jugoslawien o.n.A.",
        "geo_data": {
            "country": "Ehem."
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    },{
        "city": "Ägypten",
        "geo_data": {
            "country": "Ägypten",
            "lat": 26.820553,
            "lng": 30.802498
        },
        "data_by_year": [6, 8, 1, 4, 8, 6],
        "sum_over_all": 33
    }, {
        "city": "Algerien",
        "geo_data": {
            "lat": 28.033886,
            "country": "Algerien",
            "lng": 1.659626
        },
        "data_by_year": [2, 1, 6, 4, 2, 12],
        "sum_over_all": 27
    }, {
        "city": "Ghana",
        "geo_data": {
            "lat": 7.946527,
            "country": "Ghana",
            "lng": -1.023194
        },
        "data_by_year": [2, 5, 1, 3, 3, 8],
        "sum_over_all": 22
    }, {
        "city": "Kamerun",
        "geo_data": {
            "lat": 7.369721999999999,
            "country": "Kamerun",
            "lng": 12.354722
        },
        "data_by_year": [7, 24, 5, 18, 8, 11],
        "sum_over_all": 73
    }, {
        "city": "Liberia",
        "geo_data": {
            "lat": 6.428055,
            "country": "Liberia",
            "lng": -9.429499000000002
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Marokko",
        "geo_data": {
            "lat": 31.791702,
            "country": "Marokko",
            "lng": -7.092619999999999
        },
        "data_by_year": [5, 4, 8, 10, 11, 15],
        "sum_over_all": 53
    }, {
        "city": "Nigeria",
        "geo_data": {
            "lat": 9.081999,
            "country": "Nigeria",
            "lng": 8.675277
        },
        "data_by_year": [9, 4, 7, 7, 7, 3],
        "sum_over_all": 37
    }, {
        "city": "Sierra Leone",
        "geo_data": {
            "lat": 39.5532845,
            "country": "Sierra",
            "lng": -120.2512728
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Sudan",
        "geo_data": {
            "lat": 12.862807,
            "country": "Sudan",
            "lng": 30.217636
        },
        "data_by_year": [0, 0, 0, 0, 0, 0],
        "sum_over_all": 0
    }, {
        "city": "Togo",
        "geo_data": {
            "lat": 8.619543,
            "country": "Togo",
            "lng": 0.824782
        },
        "data_by_year": [7, 3, 2, 4, 7, 8],
        "sum_over_all": 31
    }, {
        "city": "Tunesien",
        "geo_data": {
            "lat": 33.886917,
            "country": "Tunesien",
            "lng": 9.537499
        },
        "data_by_year": [10, 2, 9, 18, 11, 15],
        "sum_over_all": 65
    }, {
        "city": "Brasilien",
        "geo_data": {
            "lat": -14.235004,
            "country": "Brasilien",
            "lng": -51.92528
        },
        "data_by_year": [17, 29, 56, 44, 49, 45],
        "sum_over_all": 240
    }, {
        "city": "Kanada",
        "geo_data": {
            "lat": 56.130366,
            "country": "Kanada",
            "lng": -106.346771
        },
        "data_by_year": [9, 13, 15, 11, 9, 14],
        "sum_over_all": 71
    }, {
        "city": "Kuba",
        "geo_data": {
            "lat": 21.521757,
            "country": "Kuba",
            "lng": -77.781167
        },
        "data_by_year": [1, 0, 6, 1, 2, 5],
        "sum_over_all": 15
    }, {
        "city": "Vereinigte Staaten",
        "geo_data": {
            "lat": 38.9071923,
            "country": "Vereinigte",
            "lng": -77.0368707
        },
        "data_by_year": [139, 169, 140, 131, 136, 175],
        "sum_over_all": 890
    }, {
        "city": "Armenien",
        "geo_data": {
            "lat": 40.069099,
            "country": "Armenien",
            "lng": 45.038189
        },
        "data_by_year": [0, 1, 2, 1, 0, 2],
        "sum_over_all": 6
    }, {
        "city": "Aserbaidschan",
        "geo_data": {
            "lat": 40.143105,
            "country": "Aserbaidschan",
            "lng": 47.576927
        },
        "data_by_year": [0, 0, 2, 0, 2, 2],
        "sum_over_all": 6
    }, {
        "city": "China",
        "geo_data": {
            "lat": 35.86166,
            "country": "China",
            "lng": 104.195397
        },
        "data_by_year": [64, 72, 61, 61, 93, 89],
        "sum_over_all": 440
    }, {
        "city": "Georgien",
        "geo_data": {
            "lat": 42.315407,
            "country": "Georgien",
            "lng": 43.35689199999999
        },
        "data_by_year": [3, 3, 8, 3, 3, 8],
        "sum_over_all": 28
    }, {
        "city": "Irak",
        "geo_data": {
            "lat": 33.223191,
            "country": "Irak",
            "lng": 43.679291
        },
        "data_by_year": [10, 28, 16, 12, 27, 90],
        "sum_over_all": 183
    }, {
        "city": "Iran",
        "geo_data": {
            "lat": 32.427908,
            "country": "Iran",
            "lng": 53.688046
        },
        "data_by_year": [6, 7, 7, 5, 5, 8],
        "sum_over_all": 38
    }, {
        "city": "Kasachstan",
        "geo_data": {
            "lat": 48.019573,
            "country": "Kasachstan",
            "lng": 66.923684
        },
        "data_by_year": [8, 2, 5, 14, 9, 7],
        "sum_over_all": 45
    }, {
        "city": "Kirgistan",
        "geo_data": {
            "lat": 41.20438,
            "country": "Kirgistan",
            "lng": 74.766098
        },
        "data_by_year": [0, 2, 2, 1, 0, 1],
        "sum_over_all": 6
    }, {
        "city": "Tadschikistan",
        "geo_data": {
            "lat": 38.861034,
            "country": "Tadschikistan",
            "lng": 71.276093
        },
        "data_by_year": [1, 2, 0, 0, 0, 0],
        "sum_over_all": 3
    }, {
        "city": "Turkmenistan",
        "geo_data": {
            "lat": 38.969719,
            "country": "Turkmenistan",
            "lng": 59.556278
        },
        "data_by_year": [0, 0, 0, 1, 0, 1],
        "sum_over_all": 2
    }, {
        "city": "Usbekistan",
        "geo_data": {
            "lat": 41.377491,
            "country": "Usbekistan",
            "lng": 64.585262
        },
        "data_by_year": [3, 3, 1, 1, 1, 1],
        "sum_over_all": 10
    }, {
        "city": "Vietnam",
        "geo_data": {
            "lat": 14.058324,
            "country": "Vietnam",
            "lng": 108.277199
        },
        "data_by_year": [15, 10, 15, 5, 10, 9],
        "sum_over_all": 64
    }],
    "years": ["2011", "2012", "2013", "2014", "2015"]
};

  constructor(http: Http) {
    this.http = http;
  }

  requestData_style() {
    return this.map_style;
  }

  requestData_map() {
    return this.map_data;
  }
}
