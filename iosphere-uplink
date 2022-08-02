// Decode an uplink message from a buffer
// payload - array of bytes
// metadata - key/value object

/** Decoder **/

// decode payload to string
//var payloadStr = decodeToString(payload);

// decode payload to JSON
var data = decodeToJson(payload);

// use assetName and assetType instead of deviceName and deviceType
// to automatically create assets instead of devices.
// var assetName = 'Asset A';
// var assetType = 'building';

// Result object with device/asset attributes/telemetry data
var result = [];

var device = {
// Use deviceName and deviceType or assetName and assetType, but not both.
   deviceName: data.deviceName,
   deviceType: data.deviceType,
   attributes: {
       profile: data.deviceType,
       deveui: data.deveui.toUpperCase(),
       gatewayName: data.gatewayName.toUpperCase(),
       rssi: data.rssi,
       snr: data.snr,
       sf: data.sf,
       integrationName: metadata['integrationName'],
       time: new Date(data.ts).toLocaleString()
   },
   telemetry: {
       ts: data.ts,
       values: data.values
   }
};

result.push(device);

var gateway = {
// Use deviceName and deviceType or assetName and assetType, but not both.
   deviceName: data.gatewayName.toUpperCase(),
   deviceType: "gateway",
   groupName: "Gateways",
   
   attributes: {
       integrationName: metadata['integrationName'],
       profil: "gateway",
       lastDeviceName: data.deviceName,
       lastDeviceType: data.deviceType
   },
   telemetry: {
   }
};

gateway.attributes[data.deviceName] = new Date(data.ts).toLocaleString();

result.push(gateway);


/** Helper functions **/

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // covert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}

return result;
