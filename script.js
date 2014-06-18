var resizeVideo = function(){
	$( '#iframe' ).css( { 'height' : parseInt( $( 'html' ).css( 'height' ) ) - ( parseInt( $( '.other' ).css( 'height' ) ) + 60 ) } );
	$( '#iframe' ).css( { 'width' :  parseInt( $( 'html' ).css( 'height' ) ) * (8/7) } );
	if( parseInt( $( '#iframe' ).css( 'width' ) ) > ( parseInt( $( 'body' ).css( 'width' ) ) - 40 ) ){
		$( '#iframe' ).css( { 'width' :  parseInt( $( 'body' ).css( 'width' ) ) - 40 } );
	}
	var iframe_w = parseInt( $( '#iframe' ).css( 'width' ) );
	var iframe_h = parseInt( $( '#iframe' ).css( 'height' ) );

	if( iframe_w < iframe_h ){
		$( '#iframe' ).css( { 'height' :  iframe_w * 0.8 } );
	}
};

$( document ).ready( function(){
	$( '.descript' ).fitText(4.1);
	$( '.links' ).fitText(3.2);
	resizeVideo();
	window.onresize = function( event ){ resizeVideo(); }
})
