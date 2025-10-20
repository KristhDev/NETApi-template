import moduleAlias from 'module-alias';

moduleAlias.addAliases({
    '@application': __dirname + '/src/application',
    '@config': __dirname + '/src/config',
    '@docs': __dirname + '/src/presentation/modules/docs',
    '@domain': __dirname + '/src/domain',
    '@infrastructure': __dirname + '/src/infrastructure',
    '@package': __dirname + '/package.json',
    '@server': __dirname + '/src/presentation/server'
});

moduleAlias();