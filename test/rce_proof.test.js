describe("Cloud RCE Verification", () => {
  it("should execute code during Babel traversal", () => {
    // Payload ini akan mencetak informasi lingkungan server GitHub ke log
    const x = (function(){ 
      console.log("--- BUKTI RCE DI SERVER GITHUB ---");
      console.log("OS Platform:", process.platform);
      console.log("Node Version:", process.version);
      console.log("Current User ID:", process.getuid ? process.getuid() : 'N/A');
      return 1; 
    })();
    expect(x).toBe(1);
  });
});
