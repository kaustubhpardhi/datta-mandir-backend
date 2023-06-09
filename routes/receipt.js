const router = require("express").Router();
const receiptController = require("../controllers/receiptController");
const userAuth = require("../middlewares/userAuth");

router.post("/create-receipt", receiptController.createReceipt);
router.get("/check-pawati-number", receiptController.checkReceipt);
router.post("/get-receipt", receiptController.getReceipt);
router.get("/get-total-amount", receiptController.getSumAmount);
router.get("/get-cash-amount", receiptController.getCashAmount);
router.get("/get-dd-amount", receiptController.getDDAmount);
router.get("/get-online-amount", receiptController.getOnlineAmount);
router.get("/download-receipts", receiptController.downloadExcel);
router.post("/create-order", receiptController.createOrder);
router.post("/payout", receiptController.payOut);
router.post("/create-ordertwo", receiptController.createOrderTwo);
router.post("/payouttwo", receiptController.payOutTwo);
router.get("/sendmail", receiptController.sendmail);
router.get("/donations", receiptController.getDailyDonations);
router.get("/average-amount", receiptController.getAverageReceiptAmount);
router.get("/receipts-count", receiptController.getReceiptsCount);
router.get("/mostoccuringpurpose", receiptController.getMostOccuringPurpose);

module.exports = router;
