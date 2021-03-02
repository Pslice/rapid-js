//promise more than try catch
try {
    throw new Error('custom error');
} catch (e) {
    console.log(e.message);
    if (e instanceof RangeError) {
        console.info('was a range')
    }
} finally {
    console.log('final');
}

