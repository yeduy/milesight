
    
    var payload = {}
    payload.ts = Math.floor(Date.parse(LoRaObject.time));
    payload.deviceName = LoRaObject.deviceName;
    payload.deviceType = "uc501";
    payload.gatewayName = LoRaObject.rxInfo[0].mac;
    payload.deveui = LoRaObject.devEUI;
    payload.rssi = LoRaObject.rxInfo[0].rssi;
    payload.snr = LoRaObject.rxInfo[0].loRaSNR;
    payload.sf = LoRaObject.txInfo.dataRate.spreadFactor;
    payload.values = decoded;


    return payload;
