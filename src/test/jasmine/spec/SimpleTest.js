describe('Model :: Todo', function() {

    describe('.Read()', function() {
        it('should read models from collection', function() {
            require(['rivets'], function(rivets) {
                var el = document.createElement('div');
                el.setAttribute('data-text', 'nom');
                rivets.bind(el, { 'nom' : 'Superman'});
                expect(el.val()).toBe("Superman");
            });
        });
    });

});
