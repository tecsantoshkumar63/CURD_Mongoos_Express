const gatewaySchema = new mongoose.Schema({
    Time: { type: String },
    Date: { type: String },
    IMEI: { type: String },
    ANI1: { type: String },
    ANI2: { type: String },
    ANI3: { type: String },
    ANI4: { type: String },
    DIN1: { type: String },
    DIN2: { type: String },
    DIN3: { type: String },
    DIN4: { type: String },
    DIN5: { type: String },
    DIN6: { type: String },
    DIN7: { type: String },
    DIN8: { type: String },
    DOUT1: { type: String },
    DOUT2: { type: String },
    DOUT3: { type: String },
    DOUT4: { type: String },
    status: { type: String },

})