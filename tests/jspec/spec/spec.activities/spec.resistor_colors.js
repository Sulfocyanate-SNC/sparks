describe 'Activity 1: Resistor Colors'

    it "should correctly enable/disable elements"
        $('#messages').html('mello')
        $('#activity_body').html('activity body');
        $('#activity_body').load('../../../activities/resistor-colors/index.html', {}, function() {
        //$('#activity_body').load('index.html', {}, function() {
            //$('#messages').html(typeof ResistorActivity)
            //jspec_sparks.activity = new ResistorActivity()
            //jspec_sparks.activity.initDocument()
            //jspec_sparks.activity.onFlashDone()
            $('#messages').html('[' + $('input, select') + ']')
            $('#messages').html('Hello')
        })
        //true.should.be false
    end
    
end
