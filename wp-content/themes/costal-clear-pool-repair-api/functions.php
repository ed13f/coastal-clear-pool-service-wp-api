<?php 

function service_post_type() {
	register_post_type('service',
		array(
			'labels'      => array(
				'name'          => __( 'Services', 'textdomain' ),
				'singular_name' => __( 'Service', 'textdomain' ),
			),
			'public'      => true,
			'has_archive' => true,
			'rewrite'     => array( 'slug' => 'services' ), // my custom slug
            'supports' => array('title','author') 
		)
	);
}
add_action('init', 'service_post_type');

function remove_post_type_title() {

    remove_post_type_support( 'service', 'content' );

}

add_action( 'init', 'remove_post_type_title' );

add_filter( 'register_post_type_args', function( $args, $post_type ) {

    // Change this to the post type you are adding support for
    if ( 'service' === $post_type ) {
      $args['show_in_graphql'] = true;
      $args['graphql_single_name'] = 'service';
      $args['graphql_plural_name'] = 'services'; # Don't set, and it will default to `all${graphql_single_name}`, i.e. `allDocument`.
    }
  
    return $args;
  
  }, 10, 2 );


  