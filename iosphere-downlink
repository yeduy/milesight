// Encode downlink data from incoming Rule Engine message

// msg - JSON message payload downlink message json
// msgType - type of message, for ex. 'ATTRIBUTES_UPDATED', 'POST_TELEMETRY_REQUEST', etc.
// metadata - list of key-value pairs with additional data about the message
// integrationMetadata - list of key-value pairs with additional data defined in Integration executing this converter

/** Encoder **/

var data = msg;

data.confirmed = true;
data.fport = 85;

// Process data from incoming message and metadata

// Result object with encoded downlink payload
var result = {

    // downlink data content type: JSON, TEXT or BINARY (base64 format)
    contentType: "JSON",

    // downlink data
    data: JSON.stringify(data),

    // Optional metadata object presented in key/value format
    metadata: {
            topic: "milesight/downlink/" + metadata.ss_deveui
    }

};

return result;
