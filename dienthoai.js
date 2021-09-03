class Mobile {
    constructor(_name) {
        this.name = _name;
        this.battery = 100;
        this.draft = "";
        this.inbox = [];
        this.outbox = [];
        this.status = true;

    }
    checkStatus () {
        return this.status;

    }
    onOff () {
        this.status = !this.status;

    }
    writting (text) {
        this.draft = text;
        this.battery--;
    }
    sendMessage (phone) {
        phone.inbox.push(this.draft);
        this.outbox.push(this.draft);
        this.draft = "";
        this.battery--;

    }
    getInbox() {
        return this.inbox ;
        this.battery--;

    }
    getOutbox () {
        if (this.status) {

        }
        return this.outbox;
        this.battery--;
    }


}
let dtCuaA = new Mobile("A");
let dtCuaB = new Mobile("B");

function guitinchoA() {
    let mess = document.getElementById("mess1").value;
    dtCuaA.writting(mess);
    dtCuaA.sendMessage(dtCuaB)
    let inboxB = dtCuaB.inbox.join("-");
    document.getElementById("inbox2").innerText = inboxB;

    
}