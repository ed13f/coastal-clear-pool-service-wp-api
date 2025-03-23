<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'coastal-clear-cms' );

/** Database username */
define( 'DB_USER', 'ricod' );

/** Database password */
define( 'DB_PASSWORD', 'bg5351991' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'es]zjieZPkv(KA/8/{cexA<L&Tr>aaMDi6jgVZy_IN $F,F/Q1fSoM3MhD^:SzrW' );
define( 'SECURE_AUTH_KEY',  'B+U}On#i@?Q=0Sqb1g)-@00:Bmci^^m4deTqbWfSUI|M&c M<kY$w$v:Rq:&qlxt' );
define( 'LOGGED_IN_KEY',    'K*B:UVx;gyvMz3>I4K)mG3wTS*aty<fs@PDKP2pbHNet^&3Mb:Op5eylsmv{rdOX' );
define( 'NONCE_KEY',        'YfXZzM~D%b#H<f+Mh*!xo({9g:#@Y&vv&HZ~6VFqo%}j?RS5X((8raD}8g}UHJ6#' );
define( 'AUTH_SALT',        '1cKv}-{nG|lj$e7CcWm.7%T:_mE&KyUk$@[.~qykq~ODI%yM>Z8q2]Y96]wz=YsB' );
define( 'SECURE_AUTH_SALT', '+IgF/,W?agn,tB#D3tEHIS*2=4`+6dXVNAy1JN15#mkwBiA}t-=O_GSNuDr|3a4c' );
define( 'LOGGED_IN_SALT',   ' y`QD@I)FP`),{=i_i1:V8cxQU~F]xrO|C[|j<{d-!|DCT#5#A#;w$q@[j3}PGzd' );
define( 'NONCE_SALT',       'X.ME4&#^Bvf$<v8&DCKWIazSw} 2F8@ou*88hSY=(1mYq#D{}W`F,&MKlTO9CLgC' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
