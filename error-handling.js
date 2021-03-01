//promise more than try catch
try {
    throw new Error('custom error');
} catch (e) {
    console.log(e.message);
} finally {
    console.log('final');
}