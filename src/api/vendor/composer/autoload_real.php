<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitf65b37b6a8cb703f4437a2880ae56bd1
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitf65b37b6a8cb703f4437a2880ae56bd1', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitf65b37b6a8cb703f4437a2880ae56bd1', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitf65b37b6a8cb703f4437a2880ae56bd1::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
