
module.exports = {
    buffer1: function () {
        const str = '\u00bd + \u00bc = \u00be';

        // Prints: ½ + ¼ = ¾: 9 characters, 12 bytes
        console.log(`${str}: ${str.length} characters, ` +
            `${Buffer.byteLength(str, 'utf8')} bytes`);
    },
    buffer2: function () {
        const buf1 = Buffer.from('1234');
        const buf2 = Buffer.from('0213');
        const result = [buf1,buf2];
        console.log(result.sort(Buffer.compare));
        console.trace();
    }

}