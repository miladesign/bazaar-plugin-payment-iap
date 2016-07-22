module.exports = {
	// SetUp IAP
	setUp: function(androidApplicationLicenseKey) {
		cordova.exec(
			function (result) {
				console.log("Initialize Success");
			}, 
			function (error) {
			},
			'IAP',
			'setUp',			
			[androidApplicationLicenseKey]
		); 
	},
	
	// requestStoreListing
	requestStoreListing: function (productIds, successCallback, failureCallback) {
		if (!productIds || productIds.length == 0) {
			return successCallback({});
		}
		if (Object.prototype.toString.call(productIds) === '[object String]') {
			productIds = [ productIds ];
		}
		cordova.exec(successCallback, failureCallback, "IAP", "requestStoreListing", [ productIds ]);	
	},
	
	// purchaseProduct
	purchaseProduct: function(productId, successCallback, failureCallback) {
		if (!productId) {
			return failureCallback("noProductId");
		}
		cordova.exec(successCallback, failureCallback, "IAP", "purchaseProduct", [ productId ]);		
	},	
	
	// consumeProduct
	consumeProduct: function (receipt, successCallback, failureCallback) {
		if (!receipt || receipt.length == 0) {
			return successCallback();
		}
		if (Object.prototype.toString.call(receipt) === '[object String]') {
			receipt = [ receipt ];
		}
		cordova.exec(successCallback, failureCallback, "IAP", "consumeProduct", [ receipt ]);
	},	
	
	// restorePurchases
	restorePurchases: function (successCallback, failureCallback) {
		cordova.exec(successCallback, failureCallback, "IAP", "restorePurchases", []);
	}
};
