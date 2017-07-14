app.service('registerRestService',['$http',function($http){
	this.register=function(restaurant, id){

		return	$http({	method :"POST",
			data:{"on_trial": 15,
  "restaurant_name": restaurant.restName,
  "zmato_id": 2,
  "about_restaurant": restaurant.restAbout,
  "address": restaurant.address,
  "contact_no": restaurant.contactNO,
  "locality": restaurant.locality,
  "city_id": restaurant.cityID,
  "country_id": restaurant.countryID,
  "zipcode": restaurant.zipCode,
  "latitude": restaurant.latitude,
  "longitude": restaurant.longitude,
  "website_url": restaurant.websiteUrl,
  "restaurant_image": restaurant.restImage,
  "overall_rating": 4,
  "is_favourite": 1,
  "favourite_score": 60,
  "qr_code": "dgfkdfjfdsfdsdfsgdsg",
  "points_to_money": 4,
  "is_active": true,
  "del_list": false,
  "free_wifi": true,
  "delivery_time": 1,
  "location": {
    "lat": "43.5984353",
    "lng": "54.35435"
  },
  "open_at": "2017-07-13",
  "close_at": "2017-07-13",
  "open_at2": "2017-07-13",
  "close_on_dow": 1,
  "close_at2": "2017-07-13",
  "min_order_amt": 453,
  "total_post": 2000,
  "no_of_followers": 6666,
  "no_of_reviews": 555,
  "no_of_check_in": 5555,
  "delivery_radius": 444,
  "delivery_charges": 200,
  "total_seats": 5000,

  
  "referred_by": 4,
  "handle": restaurant.handle,
  "is_catering": false,
  "second_open_close": false,
  "is_sponsored": true,

  "username": restaurant.username,
  "password": restaurant.password,
  "email": restaurant.email_id,

  "status": 1

},
			url: "http://stg-api.spotcrunch.com/stgapi/restaurants?access_token="+id
		})
}
}])