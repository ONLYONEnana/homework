/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const oneData = {
  'app.name': 'Ambari',
  'app.name.subtitle': 'Ambari - {0}',
  'app.name.subtitle.experimental': 'Ambari 实验',
  'app.reloadPopup.link': '登录页',
  'app.reloadPopup.text': '尝试连接服务器...',
  'app.reloadPopup.noClusterName.text': '无法检索群集名称, 尝试重新加载...',
  'app.reloadPopup.header': '重新加载页面',
  'app.redirectIssuePopup.header': '登录重定向问题',
  'app.redirectIssuePopup.body':
    '要进行单点登录，请确保Knox网关和Ambari服务器位于同一主机或子域上.' +
    '<br/>或者使用本地登录页面作为Ambari本地用户登录.<br />' +
    '<a href="{0}" target="_blank">{0}</a>',

  'app.loadingPlaceholder': '登录中...',
  'app.versionMismatchAlert.title': 'Ambari服务器 / Web客户端版本不匹配',
  'app.versionMismatchAlert.body':
    'Ambari服务器与Web客户端版本不匹配:<br> ' +
    '<br>Ambari服务器 <strong>{0}</strong>' +
    '<br>Ambari Web客户端: <strong>{1}</strong><br>' +
    '<br>这通常在升级Ambari后由于浏览器中缓存的Ambari Web客户端代码而发生.' +
    "<br>执行浏览器缓存强制刷新,通常是'Ctrl + Shift + R'(OS X上的'Cmd + Shift + R'),以查看此消息是否消失." +
    '<br>如果您持续看到此消息,请完全清除浏览器缓存并再次点击此URL.' +
    '<br>您必须解决此错误才能继续.',
  'app.signout': '登出',
  'app.settings': '设置',
  'app.manageAmbari': '管理Ambari',
  'app.aboutAmbari': '关于',
  'app.settings.selectTimezone': '时区',
  'app.settings.notshowBgOperationsPopup': '开始操作时不显示后台操作对话框',
  'app.settings.notShowBgOperations': '启动后台操作时,不要再显示此对话框',
  'app.settings.categories.general': '常用',
  'app.settings.categories.locale': '区域',
  'app.settings.noData': '无法检索设置数据',
  'app.settings.no.view.privileges': '没有查看权限',
  'app.settings.no.cluster.privileges': '没有集群权限',
  'app.settings.admin.all.privileges': '该用户是一个Ambari管理员,具有所有权限.',
  'app.settings.no.privileges': '该用户没有任何权限.',
  'app.settings.clusterRole': '群集角色',
  'app.settings.viewPermissions': '查看权限',
  'app.goToView': '转到视图',
  'app.debugHiveQuery': '调试Hive查询',

  'app.aboutAmbari.getInvolved': '加入我们!',
  'app.aboutAmbari.version': '版本',
  'app.aboutAmbari.licensed': '根据Apache许可证许可, 版本 2.0',

  apply: '应用',
  and: '与',
  none: '非',
  all: '全',
  minimum: '最小值',
  from: '来自',
  to: '',
  ok: '好',
  as: '作为',
  on: '在',
  in: '在',
  any: '任何',
  more: '更多',
  yes: '好',
  no: '不',
  add: '添加',
  op: '选则',
  ops: '多选',
  or: '或',
  then: '然后',
  it: '它',

  'common.access': '访问',
  'common.learnMore': '了解更多',
  'common.showDetails': '显示详细资料',
  'common.back': '后退',
  'common.prev': '上一页',
  'common.next': '下一页',
  'common.host': '主机',
  'common.hosts': '主机',
  'common.services': '服务',
  'common.group': '组',
  'common.groups': '组',
  'common.progress': '进度',
  'common.status': '状态',
  'common.action': '行为',
  'common.refresh': '刷新',
  'common.remove': '移除',
  'common.retry': '重试',
  'common.skip': '跳过',
  'common.filter': '过滤',
  'common.rollBack': '回滚',
  'common.show': '显示',
  'common.hide': '隐藏',
  'common.cancel': '取消',
  'common.apply': '应用',
  'common.done': '完成',
  'common.failed': '失败',
  'common.service': '服务',
  'common.version': '版本',
  'common.downgrade': '降级',
  'common.description': '描述',
  'common.default': '默认',
  'common.client': '客户端',
  'common.zookeeper': 'ZooKeeper',
  'common.hbase': 'HBase',
  'common.regionServer': 'RegionServer',
  'common.taskTracker': 'TaskTracker',
  'common.dataNode': 'DataNode',
  'common.more': '更多...',
  'common.print': '打印',
  'common.deploy': '部署',
  'common.message': '消息',
  'common.tasks': '任务',
  'common.open': '打开',
  'common.copy': '复制',
  'common.complete': '完成',
  'common.completed': '已完成',
  'common.metrics': '指标',
  'common.timeRange': '时间区间',
  'common.name': '名称',
  'common.key': '键名',
  'common.value': '键值',
  'common.ipAddress': 'IP地址',
  'common.rack': '机架',
  'common.cpu': 'CPU',
  'common.cores': '核心',
  'common.cores.cpu': '内核(CPU)',
  'common.ram': 'RAM',
  'common.disabled': '禁用',
  'common.enabled': '启用',
  'common.enableAll': '全部启用',
  'common.disableAll': '全部禁用',
  'common.disk': '硬盘',
  'common.diskUsage': '硬盘使用率',
  'common.last': '上次',
  'common.loadAvg': '平均负载',
  'common.components': '组件',
  'common.component': '组件',
  'common.quickLinks': '快速链接',
  'common.save': '保存',
  'common.saveAnyway': '坚持保存',
  'common.servers': '服务器',
  'common.clients': '客户端',
  'common.all.clients': '所有客户端',
  'common.user': '用户',
  'common.users': '用户',
  'common.issues': '问题',
  'common.os': '操作系统',
  'common.oss': '操作系统',
  'common.memory': '内存',
  'common.maximum': '最大值',
  'common.started': '已启动',
  'common.start': '启动',
  'common.stop': '停止',
  'common.pause': '暂停',
  'common.end': '结束',
  'common.decommission': '取消托管',
  'common.recommission': '重新托管',
  'common.failure': '失败',
  'common.type': '类型',
  'common.direction': '转发',
  'common.close': '关闭',
  'common.warning': '警告',
  'common.critical': '严重',
  'common.information': '信息',
  'common.all': '全部',
  'common.success': '成功',
  'common.fail': '失败',
  'common.error': '错误',
  'common.loading': '载入中',
  'common.search': '检索',
  'common.confirm': '确认',
  'common.upgrade': '升级',
  'common.reUpgrade': '重试升级',
  'common.reDowngrade': '重试降级',
  'common.security': '安全',
  'common.kerberos': 'Kerberos',
  'common.cluster': '集群',
  'common.repositories': '库',
  'common.stack.versions': '堆栈版本',
  'common.versions': '版本',
  'common.upgrade.history': '升级历史',
  'common.serviceAccounts': '服务账户',
  'common.add': '添加',
  'common.edit': '编辑',
  'common.delete': '删除',
  'common.duplicate': '重复',
  'common.disable': '失效',
  'common.enable': '生效',
  'common.empty': '空',
  'common.override': '覆盖',
  'common.undo': '撤销',
  'common.details': '详情',
  'common.stats': '统计',
  'common.abort': '终止',
  'common.aborted': '终止',
  'common.misc': '其它',
  'common.userSettings': '用户设置',
  'common.aboutAmbari': '关于',
  'common.notAvailable': '不可用',
  'common.na': 'n/a',
  'common.operations': '操作',
  'common.startTime': '开始时间',
  'common.duration': '耗时',
  'common.reinstall': '重装',
  'common.revert': '还原',
  'common.errorPopup.header': '遇到错误',
  'common.use': '使用',
  'common.stacks': '栈',
  'common.stack': '栈',
  'common.reset': '重置',
  'common.reset.default': '重置至默认',
  'common.resume': '恢复',
  'common.path': '路径',
  'common.patch': '补丁',
  'common.package': '包',
  'common.proceed': '继续',
  'common.proceedAnyway': '坚持继续',
  'common.exitAnyway': '坚持退出',
  'common.process': '执行',
  'common.property': '属性',
  'common.installed': '已安装',
  'common.persist.error': '向ambari服务器提交web客户端状态时发生错误. 服务器返回如下错误信息:',
  'common.update.error': '向ambari服务器检索web客户端状态时发生错误',
  'common.tags': '标签',
  'common.important': '重要',
  'common.important.strong': '<strong>重要:</strong>',
  'common.allServices': '所有服务',
  'common.move': '移动',
  'common.change': '改变',
  'common.overrides': '覆盖',
  'common.properties': '属性',
  'common.conf.group': '配置组',
  'common.ignore': '忽略',
  'common.restart': '重启',
  'common.discard': '放弃',
  'common.actions': '操作',
  'common.maintenance': '维护',
  'common.passive_state': '维护模式',
  'common.select': '选择',
  'common.selected': '已选',
  'common.password': '密码',
  'common.url': 'URL',
  'common.advanced': '高级',
  'common.download': '下载',
  'common.current': '当前',
  'common.additional': '附加',
  'common.time.start': '开始时间',
  'common.time.end': '结束时间',
  'common.hostLog.popup.logDir.path': '/var/lib/ambari-agent/data/', // TODO, this hardcoded path needs to be removed.
  'common.hostLog.popup.outputLog.value': '输出-{0}.txt',
  'common.hostLog.popup.errorLog.value': '错误-{0}.txt',
  'common.maintenance.task': ' 切换维护模式',
  'common.installRepo.task': '安装包',
  'common.used': '已使用',
  'common.free': '可用',
  'common.type.string': '字符串',
  'common.type.number': '数字',
  'common.author': '作者',
  'common.notes': '注意',
  'common.view': '查看',
  'common.compare': '对比',
  'common.latest': '最近',
  'common.custom': '用户',
  'common.continueAnyway': '坚持继续',
  'common.property.undefined': '未定义',
  'common.summary': '总结',
  'common.configs': '配置',
  'common.configuration': '配置',
  'common.unknown': '未知',
  'common.install': '安装',
  'common.alertDefinition': '警报定义',
  'common.prerequisites': '先决条件',
  'common.finalize': '完成',
  'common.severity': '严重性',
  'common.dismiss': '解除',
  'common.stdout': '标准输出',
  'common.stderr': '标准错误',
  'common.structuredOut': '格式化输出',
  'common.fileName': '文件名',
  'common.file': '文件',
  'common.days': '日',
  'common.hours': '时',
  'common.minutes': '分',
  'common.seconds': '秒',
  'common.milliseconds': '毫秒',
  'common.configGroup': '配置群组',
  'common.expression': '表达式',
  'common.dataSet': '数据集',
  'common.label': '标签',
  'common.preview': '预览',
  'common.options': '选项',
  'common.scope': '范围',
  'common.clone': '克隆',
  'common.removed': '已移除',
  'common.testing': '正在测试',
  'common.noData': '无数据',
  'common.export': '导出',
  'common.csv': 'CSV',
  'common.json': 'JSON',
  'common.timestamp': '时间戳',
  'common.timezone': '时区',
  'common.loading.eclipses': '加载中...',
  'common.optional': '可选',
  'common.propertyType': '参数类型',
  'common.running': '正在运行',
  'common.stopped': '已停止',
  'common.enter': '进入',
  'common.timeout.warning.popup.header': '自动注销',
  'common.timeout.warning.popup.body.before': '您将自动注销,于 ',
  'common.timeout.warning.popup.body.after': ' 秒, 因为无活动',
  'common.timeout.warning.popup.primary': '保持登录',
  'common.timeout.warning.popup.secondary': '立即注销',
  'common.openNewWindow': '在新窗口中打开',
  'common.fullLogPopup.clickToCopy': '点击复制',
  'common.nothingToDelete': '没有可删除的',
  'common.exclude': '排除',
  'common.include': '包括',
  'common.exclude.short': '不含',
  'common.include.short': '含',
  'common.filters': '过滤器',
  'common.keywords': '关键词',
  'common.levels': '等级',
  'common.extension': '延期',
  'common.logs': '日志',
  'common.warn.message': '<div class="alert alert-warning">{0}</div>',
  'common.link': '链接',
  'common.from.version': '版本来源',
  'common.to.version': '至版本',
  'common.start.time': '开始时间',
  'common.end.time': '结束时间',
  'common.rolling': '旋转',
  'common.express': '表达',
  'common.hostOrdered': '主机命令',
  'common.rolling.downgrade': '旋转下调',
  'common.express.downgrade': '表达下调',

  'models.alert_instance.tiggered.verbose': '发生在{0}上<br>已检查{1}',
  'models.alert_definition.triggered.verbose': '发生在{0}',
  'models.alert_definition.triggered.checked': '状态已更改:{0} \n上次检查:{1}',
  'models.alert_definition.check.retry': '{1}中的提醒检查{0}',

  'passiveState.turnOn': '打开维护模式',
  'passiveState.turnOff': '关掉维护模式',
  'passiveState.turnOnFor': '开启{0}的维护模式',
  'passiveState.turnOffFor': '关闭{0}的维护模式',
  'passiveState.disabled.impliedFromHighLevel': '{0}已处于维护模式,因为{1}处于维护模式.',
  'passiveState.disabled.impliedFromServiceAndHost': '{0}已处于维护模式,因为{1}和{2}处于维护模式.',

  'requestInfo.installComponents': '安装组件',
  'requestInfo.installKerbeorosComponents': '安装Kerberos组件',
  'requestInfo.installServices': '安装服务',
  'requestInfo.kerberosService': '安装Kerberos服务',
  'requestInfo.startServices': '启动服务',
  'requestInfo.startAddedServices': '开始添加服务',
  'requestInfo.stopAllServices': '停止所有服务',
  'requestInfo.startAllServices': '开始所有服务',
  'requestInfo.startHostComponent': '开始',
  'requestInfo.startHostComponent.datanode': '启动数据节点',
  'requestInfo.startHostComponent.nodemanager': '启动节点管理器',
  'requestInfo.startHostComponent.hbase_regionserver': '启动区域服务器',
  'requestInfo.startHostComponents': '启动组件',
  'requestInfo.upgradeHostComponent': '升级',
  'requestInfo.stopHostComponent': '停止',
  'requestInfo.installHostComponent': '安装',
  'requestInfo.installNewHostComponent': '安装',
  'requestInfo.refreshComponentConfigs': '刷新{0}配置',
  'requestInfo.stop': '停止{0}',
  'requestInfo.start': '开始{0}',
  'requestInfo.unspecified': '请求名称未指定',
  'requestInfo.kerberizeCluster': 'Kerberize集群',

  'hostPopup.noServicesToShow': '没有可显示的服务',
  'hostPopup.noHostsToShow': '没有可显示的主机',
  'hostPopup.noTasksToShow': '没有可显示的任务',
  'hostPopup.status.category.all': '全部({0})',
  'hostPopup.status.category.pending': '待处理({0})',
  'hostPopup.status.category.inProgress': '正在进行中({0})',
  'hostPopup.status.category.failed': '失败({0})',
  'hostPopup.status.category.success': '成功({0})',
  'hostPopup.status.category.aborted': '中止({0})',
  'hostPopup.status.category.timedout': '超时({0})',
  'hostPopup.header.postFix': '后台操作{0}运行',
  'hostPopup.serviceInfo.showMore': '展示更多...',
  'hostPopup.bgop.abortRequest.title': '中止操作',
  'hostPopup.bgop.abortRequest.confirmation.body': "您确定要中止'{0}'的操作吗?",
  'hostPopup.bgop.abortRequest.reason': '用户中止',
  'hostPopup.bgop.abortRequest.modal.header': '中止请求已发送',
  'hostPopup.bgop.abortRequest.modal.body':
    '已将<strong>{0}</strong>的中止请求发送到服务器. 注意:在应用中止请求之前,已经运行的某些任务可能有时间完成或失败.',
  'hostPopup.bgop.sourceRequestSchedule.running': '此批次请求的未来操作可以中止',
  'hostPopup.bgop.sourceRequestSchedule.aborted': '此批次请求的未来操作已中止',
  'hostPopup.bgop.abort.rollingRestart': '中止滚动重启',
  'hostPopup.warning.alertsTimeOut': '维护模式已经变为{0}. 警报可能需要几分钟{1}.',
  'hostPopup.reccomendation.beforeDecommission': '{0}退役维护模式是必需的.',
  'hostPopup.setRackId.success': "将机架ID更新为'{0}'. 可能需要一些时间才能刷新.",
  'hostPopup.setRackId.error': '更新机架ID失败.',
  'hostPopup.setRackId.invalid':
    '应该以正斜杠开头，它可能包括字母数字字符，点，破折号和正斜杠. 应少于255个符号.',
  'hostPopup.RackId': 'Rack',
  'hostPopup.recommendation.beforeDecommission': '{0}退役维护模式是必需的.',

  'question.sure': '你确定?',
  'question.sure.restart': '你确定想重启{0}?',
  'question.sure.start': '你确定想开启{0}?',
  'question.sure.stop': '你确定想停止{0}?',
  'question.sure.move': '你确定想移除{0}?',
  'question.sure.refresh': '你确定想重启所有客户端在{0}?',
  'question.sure.maintenance': '你确定想对{0}转到维护模式?',
  'question.sure.upgrade': '你确定想升级{0}?',
  'question.sure.decommission': '你确定想退除{0}?',
  'question.sure.recommission': '你确定想重新使用{0}?',
  'question.sure.startAll': '你确定想开启所有组件?',
  'question.sure.stopAll': '你确定想停止所有组件?',
  'question.sure.restartAll': '你确定想重启所有组件?',

  'popup.highlight': '点击突出显示',
  'popup.confirmation.commonHeader': '确认',
  'popup.confirmation.refreshYarnQueues.body':
    '在更改容量调度程序配置后,强烈建议<strong>刷新线队列</ strong>.您想继续吗?',
  'popup.warning.refreshYarnQueues.body':
    '<div class =“alert alert-warning”> <strong>警告：</ strong>队列配置更改可能会影响Hive LLAP使用的队列. 可能需要Hive LLAP重新配置或重启.</ div>',
  'popup.confirmation.refreshYarnQueues.buttonText': '刷新Yarn队列',
  'popup.confirmation.hsiRestart.body':
    '对Hive LLAP调整配置进行更改后,强烈建议<strong>重新启动HiveServer2 Interactive </ strong>. 您想继续吗?',
  'popup.confirmation.hsiRestart.buttonText': '重启 HiveServer2 Interactive',
  'popup.prompt.commonHeader': '提示',
  'popup.confirmationFeedBack.sending': '发送...',
  'popup.confirmationFeedBack.query.fail': '请求失败',

  'popup.clusterCheck.failedOn': '失败: ',
  'popup.clusterCheck.reason': '原因: ',
  'popup.clusterCheck.Upgrade.header': '升级到{0}',
  'popup.clusterCheck.Upgrade.fail.title': '要求',
  'popup.clusterCheck.Upgrade.fail.alert': '您<strong>必须</strong>满足这些要求才能继续.',
  'popup.clusterCheck.Upgrade.bypassed-failures.title': '可以绕过的错误',
  'popup.clusterCheck.Upgrade.bypassed-failures.alert':
    '由于config stack.upgrade.bypass.prechecks设置为true,因此可以绕过错误. 强烈建议您查看这些故障.',
  'popup.clusterCheck.Upgrade.warning.title': '警告',
  'popup.clusterCheck.Upgrade.warning.alert': '不需要更正警告,但是<strong>建议</strong>.',
  'popup.clusterCheck.Upgrade.configsMerge.title': '配置更改',
  'popup.clusterCheck.Upgrade.configsMerge.alert': '在升级过程中,将会应用以下配置更改.',
  'popup.clusterCheck.Upgrade.configsMerge.configType': '配置类型',
  'popup.clusterCheck.Upgrade.configsMerge.propertyName': '属性名称',
  'popup.clusterCheck.Upgrade.configsMerge.currentValue': '当前值',
  'popup.clusterCheck.Upgrade.configsMerge.recommendedValue': '推荐值',
  'popup.clusterCheck.Upgrade.configsMerge.resultingValue': '结果值',
  'popup.clusterCheck.Upgrade.configsMerge.deprecated': '属性已弃用',
  'popup.clusterCheck.Upgrade.configsMerge.willBeRemoved': '将被删除',
  'popup.clusterCheck.Upgrade.configsRecommend.alert':
    '我们检测到需要更新以下属性,' +
    ' 但是由于它们已被定制，所以不能自动执行.请手动查看这些属性,' +
    ' 并在必要时手动更新属性.',
  'popup.clusterCheck.Upgrade.configsRecommend.title': '推荐配置更改:手动审核',
  'popup.clusterCheck.Security.header': '启用安全性',
  'popup.clusterCheck.Security.title': '安全要求不符合',
  'popup.clusterCheck.Security.alert': '您必须满足以下要求才能启用安全性.',

  'popup.invalid.KDC.header': '管理员会话过期错误',
  'popup.invalid.KDC.msg': ' 请输入管理员主体和密码.',
  'popup.invalid.KDC.admin.principal': '管理原则',
  'popup.invalid.KDC.admin.password': '管理员密码',

  'popup.dependent.configs.header': '依赖配置',
  'popup.dependent.configs.title.recommendation': '根据您的配置更改，Ambari推荐以下依赖配置更改.',
  'popup.dependent.configs.title.values':
    'Ambari将将所有检查的配置更改更新为<b>推荐值</ b>. 取消选中任何配置以保留<b>当前值</ b>.',
  'popup.dependent.configs.title.required': '需要进行以下配置更改，并将自动应用.',
  'popup.dependent.configs.table.recommended': '推荐更改',
  'popup.dependent.configs.table.required': '必要更改',
  'popup.dependent.configs.table.saveProperty': '保存属性',
  'popup.dependent.configs.table.initValue': '初始值',
  'popup.dependent.configs.table.currentValue': '当前值',
  'popup.dependent.configs.table.recommendedValue': '推荐值',
  'popup.dependent.configs.table.newValue': '新值',
  'popup.dependent.configs.table.undefined': '参数未定义',
  'popup.dependent.configs.table.removed': '参数已移除',

  'popup.dependent.configs.select.config.group.header': '选择配置组',
  'popup.dependent.configs.select.config.group.no.groups': '没有配置组为当前服务',
  'popup.dependent.configs.select.config.group': '请选择您要保存从属属性到哪个配置组',

  'popup.dependent.configs.dependencies.config.singular': '{0}配置更改 ',
  'popup.dependent.configs.dependencies.config.plural': '有{0}配置更改 ',
  'popup.dependent.configs.dependencies.service.singular': '在{0}服务',
  'popup.dependent.configs.dependencies.service.plural': '在{0}服务',

  'popup.dependent.configs.dependencies.for.groups':
    '您正在更改不是默认组,请选择要从其他服务保存相关配置的配置组',

  'popup.jdkValidation.header': '不支持的JDK',
  'popup.jdkValidation.body':
    '{0}堆栈需要JDK {1},但是将Ambari配置为JDK {2}. 这可能会导致运行群集的错误或问题.',
  'popup.logTail.header': '文件名',
  'popup.logTail.openInLogSearch': '打开日志搜索',

  'login.header': '登录',
  'login.message.title': '登录讯息',
  'login.username': '用户名',
  'login.loginButton': '登录',
  'login.error.bad.credentials': '无法登录.无效的用户名/密码组合.',
  'login.error.disabled': '无法登录.无效的用户名/密码组合.',
  'login.error.bad.connection':
    '无法连接到Ambari服务器. 确认Ambari服务器正在运行,您可以从本机访问Ambari服务器.',

  'titlebar.alerts.noAlerts': '没有警告',

  'graphs.noData.title': '没有数据',
  'graphs.noData.message': '无可用数据',
  'graphs.noData.tooltip.title': '无可用数据. Ambari Metrics服务可能未安装或无法访问',
  'graphs.noDataAtTime.message': '该时间段内没有可用数据.',
  'graphs.error.title': '错误',
  'graphs.error.message': '获取图表的数据时出现问题({0}:{1})',
  'graphs.timeRange.hour': '最近1小时',
  'graphs.timeRange.twoHours': '最近2小时',
  'graphs.timeRange.fourHours': '最近4小时',
  'graphs.timeRange.twelveHours': '最近12小时',
  'graphs.timeRange.day': '最近24小时',
  'graphs.timeRange.week': '最近1周',
  'graphs.timeRange.month': '最近1个月',
  'graphs.timeRange.year': '最近1年',
  'graphs.tooltip.title': '点击放大',

  'users.userName.validationFail': '仅限小写字母和数字; 必须从字母开始',
  'host.spacesValidation': '不能包含空格',

  'services.hdfs.rebalance.title': 'HDFS重新平衡',
  'services.ganglia.description': '神经节指标收集系统',
  'services.hdfs.description': 'Apache Hadoop分布式文件系统',
  'services.glusterfs.description': 'Apache Hadoop兼容文件系统(必须手动安装)',
  'services.sqoop.description':
    '用于在Apache Hadoop和结构化数据存储(如关系数据库)之间传输批量数据的工具',
  'services.pig.description': '用于分析大型数据集的脚本平台',
  'services.hive.description': '数据仓库系统,用于大型数据集和表和存储管理服务的特殊查询和分析',
  'services.oozie.description': '用于工作流协调和执行Apache Hadoop作业的系统',
  'services.zookeeper.description': '集中的服务,提供高度可靠的分布式协调',
  'services.hbase.description': '非关系分布式数据库和集中式服务,用于配置管理和同步',
  'services.hive.databaseComponent': '数据库服务器',
  'services.mapreduce2.description': 'Apache Hadoop NextGen MapReduce(客户端库)',
  'services.yarn.description': 'Apache Hadoop NextGen MapReduce(YARN)',
  'services.tez.description': 'Tez是YARN上面编写的下一代Hadoop查询处理框架',
  'services.falcon.description': '猎鹰镜像引擎',
  'services.storm.description': 'Apache Hadoop Stream处理框架',
  'services.storm.configs.range-plugin-enable.dialog.title': '启用STORM的游侠',
  'services.storm.configs.range-plugin-enable.dialog.message':
    '启用STORM的Ranger插件仅在安全集群上有效.',

  'services.alerts.head': '您有{0}个关键警报通知.',
  'services.alerts.OK.timePrefixShort': '好',
  'services.alerts.WARN.timePrefixShort': '警告',
  'services.alerts.CRIT.timePrefixShort': '危急',
  'services.alerts.MAINT.timePrefixShort': '维持',
  'services.alerts.UNKNOWN.timePrefixShort': '未知',
  'services.alerts.OK.timePrefix': '好 , {0}',
  'services.alerts.WARN.timePrefix': '警告 , {0}',
  'services.alerts.CRIT.timePrefix': '危急 , {0}',
  'services.alerts.MAINT.timePrefix': '维持 , {0}',
  'services.alerts.UNKNOWN.timePrefix': '未知 , {0}',
  'services.alerts.lastCheck': '上次检查{0}',
  'services.alerts.brLastCheck': '<br>上次检查{0}',
  'services.alerts.occurredOn': '发生在{0},{1}',
  'services.alerts.goToService': '转到服务',
  'services.alerts.goTo': '转到{0}',

  'services.summary.selectHostForComponent': '选择要添加{0}组件的主机',
  'services.summary.allHostsAlreadyRunComponent': '所有主机已经运行{0}组件',

  'topnav.logo.href': '/#/main/dashboard',
  'topnav.help.href': 'https://cwiki.apache.org/confluence/display/AMBARI/Ambari',

  'installer.header': '群集安装向导',
  'installer.navigation.warning.header': '导航警告',

  'installer.noHostsAssigned': '没有分配主机',
  'installer.slaveComponentHosts.selectHosts': '选择此组的主机',
  'installer.slaveComponentHostsPopup.header': '选择哪个主机应属于哪个{0}组',

  'installer.controls.slaveComponentGroups': ' 组',
  'installer.controls.serviceConfigPopover.title': '{0}<br><small>{1}</small>',
  'installer.controls.checkConnection.popover':
    '此操作将检查Ambari服务器主机的{0}主机和端口的可访问性',
  'installer.controls.serviceConfigMultipleHosts.other': '1其他',
  'installer.controls.serviceConfigMultipleHosts.others': '{0}其他',
  'installer.controls.serviceConfigMasterHosts.header': '{0}主机',
  'installer.controls.slaveComponentChangeGroupName.error': '具有此名称的组已存在',

  'installer.step0.header': '开始使用',
  'installer.step0.body.header': '开始使用',
  'installer.step0.body': '此向导将引导您完成集群安装过程. 首先,命名您的新集群.',
  'installer.step0.clusterName': '命名您的群集',
  'installer.step0.clusterName.tooltip.title': '集群名称',
  'installer.step0.clusterName.tooltip.content': '输入唯一的集群名称.',
  'installer.step0.clusterName.error.required': '集群名称是必需的',
  'installer.step0.clusterName.error.tooLong': '群集名称太长',
  'installer.step0.clusterName.error.whitespace': '群集名称不能包含空格',
  'installer.step0.clusterName.error.specialChar': '群集名称不能包含特殊字符',

  'installer.step1.header': '选择版本',
  'installer.step1.body': '选择您的集群的软件版本和交付方式.',
  'installer.step1.repo.body':
    '使用公共存储库需要Internet连接.使用本地存储库要求您已将软件配置在网络中可用的存储库中.',
  'installer.step1.addVersion.title': '添加版本',
  'installer.step1.changeVersion.defaultVersion': '默认版本定义',
  'installer.step1.selectUseRepoOptions.public': '使用公共库',
  'installer.step1.selectUseRepoOptions.public.networkLost.button': '不可用',
  'installer.step1.selectUseRepoOptions.public.networkLost': '为什么没有被选中?',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.title': '未选择公共库选项',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg':
    'Ambari无法确认对公共库的访问,这意味着您可能没有Internet访问,并且无法使用公共库选项来安装该软件. 你的选择:',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg1': '配置主机以访问Internet.',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg2':
    '如果您正在使用Internet Proxy,请参阅Ambari文档,了解如何配置Ambari以使用Internet Proxy.',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg3': '使用本地库选项.',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg4':
    '如果您没有互联网访问权限并选择此选项,库基本URL验证将失败.',
  'installer.step1.selectUseRepoOptions.public.select': '选择版本',
  'installer.step1.selectUseRepoOptions.local': '使用本地库',
  'installer.step1.usePublicRepo.ReposList.empty': '没有其他版本',
  'installer.step1.usePublicRepo.viewRepos': '查看库',
  'installer.step1.useLocalRepo.uploadFile': '上传版本定义文件',
  'installer.step1.useLocalRepo.uploadFile.error.title': '上传版本定义文件错误',
  'installer.step1.useLocalRepo.getSurpottedOs.error.title': '无法获得受支持的操作系统类型',
  'installer.step1.useLocalRepo.addRepo.button': '添加库',
  'installer.step1.addVersion': '添加版本',
  'installer.step1.addVersion.stackChanged.popup.body': '堆栈从{0}更改为{1}.',
  'installer.step1.useLocalRepo.enterUrl': '版本定义文件URL',
  'installer.step1.useLocalRepo.enterUrl.placeholder': '输入URL到版本定义文件',
  'installer.step1.useLocalRepo.readButton': '阅读版本信息',
  'installer.step1.useLocalRepo.infoForm.details.title': '细节',
  'installer.step1.useLocalRepo.infoForm.details.stackName': '堆栈名称',
  'installer.step1.useLocalRepo.infoForm.details.displayName': '显示名称',
  'installer.step1.useLocalRepo.infoForm.details.version': '版本',
  'installer.step1.useLocalRepo.infoForm.details.actualVersion': '实际版本',
  'installer.step1.useLocalRepo.infoForm.details.releaseNotes': '发行说明',
  'installer.step1.useLocalRepo.infoForm.content.title': '内容',
  'installer.step1.useLocalRepo.infoForm.content.empty': '没有内容显示',
  'installer.step1.useLocalRepo.infoForm.alert.baseUrl': '为您正在配置的操作系统提供基本URL.',
  'installer.step1.useLocalRepo.infoForm.alert.warning':
    '一些库验证失败. 如果您确定网址正确,请更改基本网址或跳过验证',
  'installer.step1.advancedRepo.title': '高级库选项',
  'installer.step1.advancedRepo.message':
    '自定义库用于下载堆栈软件包的基本URL. 如果您的主机无法访问Internet,则必须使用这些基本URL创建一个可以由所有主机访问的堆栈库的本地镜像.',
  'installer.step1.advancedRepo.importantMassage':
    '<b>重要:</b> 当使用本地镜像库时,您只需要为安装堆栈的操作系统提供基本URL. 取消选中所有其他库.',
  'installer.step1.advancedRepo.localRepo.error.modifyUrl': '必须修改本地库URL',
  'installer.step1.advancedRepo.localRepo.error.noUrl': '本地库所需的基本URL',
  'installer.step1.advancedRepo.localRepo.column.baseUrl': '基本URL',
  'installer.step1.advancedRepo.localRepo.label.os': '操作系统',
  'installer.step1.advancedRepo.localRepo.label.baseUrl': '库基本URL',
  'installer.step1.advancedRepo.localRepo.label.stack': '堆栈',
  'installer.step1.advancedRepo.localRepo.placeholder': '输入基本URL或删除此操作系统',
  'installer.step1.advancedRepo.skipValidation.tooltip':
    '警告：这仅适用于高级用户. 如果要跳过Repository Base URL的验证，请使用此选项.',
  'installer.step1.advancedRepo.useRedhatSatellite.tooltip':
    '禁用分布式库,并改用RedHat Satellite/Spacewalk通道',
  'installer.step1.advancedRepo.useRedhatSatellite.disabled.tooltip':
    '使用RedHat Satellite/Spacewalk在使用公共库时不可用',
  'installer.step1.advancedRepo.skipValidation.message': '跳过库基本URL验证 (高级)',
  'installer.step1.advancedRepo.useRedhatSatellite.message': '使用RedHat Satellite/Spacewalk',
  'installer.step1.advancedRepo.useRedhatSatellite.warning':
    '通过选择<b>"使用RedHat Satellite/Spacewalk"</b> 用于软件仓库, ' +
    '您负责在Satellite/Spacewalk中配置库通道,并确认所选的库<b>堆栈版本</b>在集群中的主机上可用. ' +
    '有关更多信息,请参阅Ambari文档.',
  'installer.step1.addOs.disabled.tooltip': '已添加所有操作系统',
  'installer.step1.attentionNeeded':
    '<b>注意:</b>库至少需要一个操作系统的基本URL,然后才能继续. 请确保它们的协议格式正确.',
  'installer.step1.invalidURLAttention': '<b>注意:</b> 在继续之前,请确保所有库URL都有效.',
  'installer.step1.checkAtLeastOneAttention': '<b>注意:</b>请至少检查一个资料库.',
  'installer.step1.retryRepoUrls': '点击<b>这里</b>重试.',

  'installer.step2.header': '安装选项',
  'installer.step2.body': '输入要包含在群集中的主机列表,并提供您的SSH密钥.',
  'installer.step2.targetHosts': '目标主机',
  'installer.step2.targetHosts.info': '使用完全限定域名(FQDN)输入主机列表,每行一个',
  'installer.step2.hostPattern.tooltip.title': '模式表达式',
  'installer.step2.hostPattern.tooltip.content':
    '您可以使用模式表达式来指定多个目标主机. 例如,要通过host10.domain指定host01.domain,请在目标主机文本域中输入host[01-10].domain.',
  'installer.step2.hostName.error.required': '您必须至少指定一个主机名',
  'installer.step2.hostName.error.already_installed': '所有这些主机都已经是集群的一部分',
  'installer.step2.hostName.error.notRequired': '如果不使用SSH自动配置主机,主机名将被忽略',
  'installer.step2.hostName.error.invalid': '无效主机名(s)',
  'installer.step2.hostName.pattern.header': '主机名模式表达式',
  'installer.step2.sshKey': '主机注册信息',
  'installer.step2.sshKey.error.required': 'SSH私钥是必需的',
  'installer.step2.passphrase.error.match': '密码不匹配',
  'installer.step2.manualInstall.label': '不要使用SSH自动配置主机 ',
  'installer.step2.manualInstall.info':
    '通过不使用SSH连接到目标主机,您必须手动安装和' +
    ' 启动每个主机上的Ambari Agent,以使向导执行必要的配置' +
    ' 软件安装.',
  'installer.step2.advancedOption': '高级选项',
  'installer.step2.repoConf': '软件资源库配置文件路径',
  'installer.step2.advancedOptions.header': '高级选项',
  'installer.step2.localRepo.label_use': '用一个',
  'installer.step2.localRepo.label_instead': '而不是从互联网下载软件包',
  'installer.step2.localRepo.error.required': '本地库文件路径是必需的',
  'installer.step2.localRepo.tooltip.title': '本地软件库',
  'installer.step2.localRepo.tooltip.content':
    '集群安装需要访问Internet才能获取软件从远程库. ' +
    '在某些情况下,无法使用足够的带宽,并且您希望防止一遍又一遍地下载' +
    '来自远程库的软件包. 其他时候,集群中的主机无法使用Internet访问.' +
    '在这些情况下,您必须设置您的计算机可以在本地访问的库的版本, ' +
    '这被称为一个<b>本地软件库</b>',
  'installer.step2.javaHome.label': '路径为64-bit JDK',
  'installer.step2.javaHome.tooltip.title': 'JAVA_HOME',
  'installer.step2.javaHome.tooltip.content':
    '路径为64-bit JAVA_HOME. /usr/jdk/jdk1.6.0_31 是Ambari使用的默认值. 您可以将其覆盖到包含JDK的特定路径. <br/> 注意: 该路径必须在群集中的<b>所有</b>主机上有效.',
  'installer.step2.javaHome.tooltip.placeholder': '/usr/jdk/jdk1.6.0_31',
  'installer.step2.automaticInstall.tooltip.title': '自动注册',
  'installer.step2.automaticInstall.tooltip.content':
    '在安装群集之前,Ambari将在每个主机上自动安装和注册Ambari Agent.',
  'installer.step2.useSsh.provide': '提供你的',
  'installer.step2.useSsh.provide_id_rsa': ' 自动注册主机',
  'installer.step2.useSsh.tooltip.title': 'SSH私钥',
  'installer.step2.useSsh.tooltip.content':
    '<b>SSH私钥文件</b>用于连接到集群中的目标主机以安装Ambari Agent.',
  'installer.step2.install.perform': '执行',
  'installer.step2.install.perform_on_hosts': '在主机上',
  'installer.step2.install.without_ssh': ' 并且不要使用SSH',
  'installer.step2.manualInstall.tooltip.title': '手动注册',
  'installer.step2.manualInstall.tooltip.content':
    '在每个主机上手动注册Ambari Agent,无需使用SSH,并且应该在继续群集安装之前执行.',
  'installer.step2.manualInstall.tooltip.content_no_ssh':
    '在继续群集安装之前,应在每台主机上手动注册Ambari Agent.',
  'installer.step2.manualInstall.popup.header': '在你继续前',
  'installer.step2.manualInstall.popup.body':
    '在您继续之前,您必须在要管理的每台主机上安装Ambari Agent.',
  'installer.step2.warning.popup.body':
    '<p>以下主机名不是有效的FQDN:</p><p> {0} </p><p>这可能会导致安装过程中的问题. 你想继续吗?</p>',
  'installer.step2.orUse': '或使用',
  'installer.step2.registerAndConfirm': '注册并确认',
  'installer.step2.evaluateStep.installedHosts': '这些主机已经安装在集群上,将被忽略:',
  'installer.step2.evaluateStep.continueConfirm': '你想继续吗?',
  'installer.step2.evaluateStep.hostRegInProgress': '主机注册正在进行中.请稍后再试.',
  'installer.step2.sshUser': 'SSH用户帐号',
  'installer.step2.sshUser.toolTip':
    '用户帐户用于通过SSH在目标主机上安装Ambari Agent.此用户必须设置为所有目标主机上的无密码SSH和sudo访问权限',
  'installer.step2.sshUser.placeholder': '输入用户名',
  'installer.step2.sshUser.required': '用户名是必需的',
  'installer.step2.sshPort': 'SSH端口号',
  'installer.step2.sshPort.toolTip': 'SSH端口号',
  'installer.step2.sshPort.required': 'SSH端口号是必需的.',
  'installer.step2.agentUser': 'Ambari代理用户帐号',
  'installer.step2.agentUser.toolTip':
    '用于在目标主机上运行Ambari Agent守护程序的用户帐户. 该用户必须在所有目标主机上设置无密码sudo访问权限',
  'installer.step2.bootStrap.error': '在主机上设置Ambari Agent时遇到错误.',
  'installer.step2.bootStrap.inProgress':
    '请等待Ambari代理在主机上设置.这可能需要几分钟,具体取决于主机数量.',
  'installer.step2.bootStrap.header': '设立Ambari代理',

  'installer.step3.header': '确认主机',
  'installer.step3.body':
    '注册你的主机.<br>' + '请确认主机列表,并删除您不希望包含在群集中的任何主机.',
  'installer.step3.hostLog.popup.header': '注册日志{0}',
  'installer.step3.hosts.remove.popup.header': '删除主机',
  'installer.step3.hosts.remove.popup.body': '您确定要删除所选主机吗?',
  'installer.step3.hostInformation.popup.header': '检索主机信息时出错',
  'installer.step3.hostInformation.popup.body': '所有引导的主机注册但无法检索cpu和内存相关信息',
  'installer.step3.hostOsTypeCheck.popup.body':
    '主机注册成功,但主机操作系统类型与"选择堆栈"步骤中选定的组不匹配:高级库选项.您可以回到"选择堆栈"步骤或删除此主机.' +
    '主机类型为{0},但您在步骤1中选择了组{1}.',
  'installer.step3.hostWarningsPopup.report': '显示报告',
  'installer.step3.hostWarningsPopup.report.header':
    '<p style="font-family: monospace">######################################<br># 主机检查报告<br>#<br># 生成: ',
  'installer.step3.hostWarningsPopup.report.hosts':
    '<br>######################################<br><br>######################################<br># 主机<br>#<br># 一个空间分隔的主机列表有问题.<br># 提供管理员可以轻松地将主机名复制到脚本,电子邮件等.<br>######################################<br>主机<br>',
  'installer.step3.hostWarningsPopup.report.jdk':
    '<br><br>######################################<br># JDK检查 <br>#<br># JDK问题的换行符分隔列表.<br>######################################<br>JDK问题<br>',
  'installer.step3.hostWarningsPopup.report.disk':
    '<br><br>######################################<br># 磁盘 <br>#<br># 一个换行符分隔的磁盘问题列表.<br>######################################<br>磁盘问题br>',
  'installer.step3.hostWarningsPopup.report.repositories':
    '<br><br>######################################<br># 库 <br>#<br># 一个换行符分隔的库的问题列表.<br>######################################<br>报告问题<br>',
  'installer.step3.hostWarningsPopup.report.hostNameResolution':
    '<br><br>######################################<br># 主机名解析<br>#<br># 一个换行符分隔的主机名解析问题列表.<br>######################################<br>主机名解析问题<br>',
  'installer.step3.hostWarningsPopup.report.thp':
    '<br><br>######################################<br># 透明的巨大页面(THP) <br>#<br># 一个空格分隔的主机名列表,其中启用了透明的页面.<br>######################################<br>THP问题主机<br>',
  'installer.step3.hostWarningsPopup.report.firewall':
    '<br><br>######################################<br># 防火墙<br>#<br># 一个换行符分隔的防火墙的问题列表.<br>######################################<br>防火墙<br>',
  'installer.step3.hostWarningsPopup.report.fileFolders':
    '<br><br>######################################<br># 文件和文件夹<br>#<br># 文件和文件夹的空格分隔列表，不应该存在.<br># 提供管理员可以轻松地将路径复制到脚本,电子邮件等.<br># 例如: rm -r /etc/hadoop /etc/hbase<br>######################################<br>文件和文件夹<br>',
  'installer.step3.hostWarningsPopup.report.reverseLookup':
    '<br><br>######################################<br># 反向查询<br># <br># 在反向DNS查找中找不到主机名. 这可能会导致错误的行为. <br># 请检查DNS设置并解决问题.<br>######################################<br>反向查询<br>',
  'installer.step3.hostWarningsPopup.report.process':
    '<br><br>######################################<br># 过程<br>#<br># 以逗号分隔的不应该运行的进程元组列表.<br># 提供给管理员可以轻松地将路径复制到脚本,电子邮件等.<br>######################################<br>过程<br>',
  'installer.step3.hostWarningsPopup.report.package':
    '<br><br>######################################<br># 包装<br>#<br># 一个应该卸载的空格分隔的软件包列表.<br># 提供给管理员可以轻松地将路径复制到脚本,电子邮件等.<br># 例如: yum删除hadoop-hdfs yarn<br>######################################<br>包装<br>',
  'installer.step3.hostWarningsPopup.report.service':
    '<br><br>######################################<br># 服务<br>#<br># 一个空格分隔的应该运行的服务列表.<br># 提供给管理员可以轻松地将路径复制到脚本,电子邮件等.<br># 例如: 服务启动ntpd httpd<br>######################################<br>服务<br>',
  'installer.step3.hostWarningsPopup.report.user':
    '<br><br>######################################<br># 用户<br>#<br># 一个空格分隔的不应该存在的用户列表.<br># 提供给管理员可以轻松地将路径复制到脚本,电子邮件等.<br># 例如: userdel hdfs<br>######################################<br>用户<br>',
  'installer.step3.hostWarningsPopup.report.folder': '\\ /folder',
  'installer.step3.hostWarningsPopup.checks': '发现主机检查',
  'installer.step3.hostWarningsPopup.notice':
    '手动解决问题后,单击<b>重新运行检查</b>.' +
    '<br>要手动解决<b>每个主机</b>上的问题,请运行HostCleanup脚本(需要Python 2.6或更高版本):' +
    '<br><div class="code-snippet">python /usr/lib/python2.6/site-packages/ambari_agent/HostCleanup.py --silent --skip=users</div>' +
    '<div class="alert alert-warning"><b>注意</ b>：HostCleanup脚本不支持清除防火墙和透明巨大页面问题.</ div>' +
    '<div class="alert alert-warning"><b>Note</b>: 要在交互模式下进行清理，请删除<b> - silent </ b>选项. 要清理所有资源，包括<i>用户</ i>,请删除<b> - skip = users </ b>选项.使用<b> - 帮助</ b>获取可用选项的列表.</div>',
  'installer.step3.hostWarningsPopup.summary': '{0} 在 {1}',
  'installer.step3.hostWarningsPopup.jdk': 'JDK问题',
  'installer.step3.hostWarningsPopup.jdk.name': 'JDK 找不到<i>{0}</i>',
  'installer.step3.hostWarningsPopup.jdk.context': '{0}',
  'installer.step3.hostWarningsPopup.jdk.message': '以下注册的主机与JDK相关的问题',
  'installer.step3.hostWarningsPopup.repositories': '库问题',
  'installer.step3.hostWarningsPopup.repositories.name': '库的操作系统不可用',
  'installer.step3.hostWarningsPopup.repositories.context':
    '主机({0})是{1}操作系统类型，但在"选择堆栈"步骤中选择的库是{2}. 所选库不支持此主机操作系统类型.',
  'installer.step3.hostWarningsPopup.repositories.message':
    '以下注册的主机在"选择堆栈"步骤中选择的可用库中具有不同的操作系统类型.您可以返回到"选择堆栈"步骤,以选择其他操作系统库<b>或</b>删除主机.',
  'installer.step3.hostWarningsPopup.disk': '磁盘问题',
  'installer.step3.hostWarningsPopup.disk.name': '没有足够的磁盘空间',
  'installer.step3.hostWarningsPopup.disk.context1': '主机上磁盘空间不足({0}).',
  'installer.step3.hostWarningsPopup.disk.context2': '"{1}"挂载需要至少为{0}.',
  'installer.step3.hostWarningsPopup.disk.message': '以下注册的主机存在与磁盘空间相关的问题',
  'installer.step3.hostWarningsPopup.thp': '透明巨大的页面问题',
  'installer.step3.hostWarningsPopup.thp.name': '透明的页面',
  'installer.step3.hostWarningsPopup.thp.context': '{0}',
  'installer.step3.hostWarningsPopup.thp.message':
    '以下主机启用了透明巨大页面(THP). 应禁用THP以避免潜在的Hadoop性能问题.',
  'installer.step3.hostWarningsPopup.firewall': '防火墙问题',
  'installer.step3.hostWarningsPopup.firewall.message':
    '防火墙正在以下主机上运行.请配置防火墙,以允许在该端口上记录的端口进行通信<i>配置端口</i> 的部分 <a target="_blank" href="http://ambari.apache.org/current/installing-hadoop-using-ambari/content/">Ambari文档</a>',
  'installer.step3.hostWarningsPopup.process': '流程问题',
  'installer.step3.hostWarningsPopup.processes.message': '以下进程不应该运行',
  'installer.step3.hostWarningsPopup.fileAndFolder': '文件和文件夹问题',
  'installer.step3.hostWarningsPopup.fileFolders.message': '以下文件和文件夹不应存在',
  'installer.step3.hostWarningsPopup.package': '包问题',
  'installer.step3.hostWarningsPopup.packages.message': '应卸载以下软件包',
  'installer.step3.hostWarningsPopup.user': '用户问题',
  'installer.step3.hostWarningsPopup.users.message': '应删除以下用户',
  'installer.step3.hostWarningsPopup.service': '服务问题',
  'installer.step3.hostWarningsPopup.services.message': '以下服务应该被启用',
  'installer.step3.hostWarningsPopup.misc': '其他问题',
  'installer.step3.hostWarningsPopup.misc.message': '以下umask应该更改',
  'installer.step3.hostWarningsPopup.misc.umask': 'Umask',
  'installer.step3.hostWarningsPopup.alternatives': '替代问题',
  'installer.step3.hostWarningsPopup.alternatives.umask': '备择方案',
  'installer.step3.hostWarningsPopup.alternatives.message': '应该删除以下替代方案',
  'installer.step3.hostWarningsPopup.alternatives.noIssues': '没有其他问题,应该删除替代方案',
  'installer.step3.hostWarningsPopup.alternatives.empty': '替代问题',
  'installer.step3.hostWarningsPopup.issue': '问题',
  'installer.step3.hostWarningsPopup.issues': '问题',
  'installer.step3.hostWarningsPopup.emptyMessage': '没有{0}',
  'installer.step3.hostWarningsPopup.empty.filesAndFolders': '不需要的文件和文件夹',
  'installer.step3.hostWarningsPopup.empty.processes': '不需要的进程',
  'installer.step3.hostWarningsPopup.empty.packages': '不需要的包',
  'installer.step3.hostWarningsPopup.empty.users': '不需要的用户',
  'installer.step3.hostWarningsPopup.empty.services': '不需要的服务',
  'installer.step3.hostWarningsPopup.empty.misc': '问题',
  'installer.step3.hostWarningsPopup.empty.firewall': '防火墙运行',
  'installer.step3.hostWarningsPopup.empty.repositories': '库操作系统类型与注册主机失配',
  'installer.step3.hostWarningsPopup.empty.disk': '磁盘空间问题',
  'installer.step3.hostWarningsPopup.empty.jdk': 'JDK问题',
  'installer.step3.hostWarningsPopup.empty.thp': 'THP问题',
  'installer.step3.hostWarningsPopup.reverseLookup.name': '反向查询验证失败',
  'installer.step3.hostWarningsPopup.reverseLookup': '反向查询问题',
  'installer.step3.hostWarningsPopup.reverseLookup.message':
    '在反向DNS查找中找不到主机名.这可能会导致错误的行为.请检查DNS设置并解决问题.',
  'installer.step3.hostWarningsPopup.reverseLookup.empty': '反向DNS查找问题.',
  'installer.step3.hostWarningsPopup.resolution.validation.name': '主机名解析问题',
  'installer.step3.hostWarningsPopup.resolution.validation.error': '主机名解析',
  'installer.step3.hostWarningsPopup.resolution.validation': '主机名解析验证',
  'installer.step3.hostWarningsPopup.resolution.validation.message':
    '并非所有主机都可以解析其他主机的主机名.在继续之前,确保主机解析在所有主机上正常工作.',
  'installer.step3.hostWarningsPopup.resolution.validation.empty': '主机名解析问题',
  'installer.step3.hostWarningsPopup.resolution.validation.context': '{0} 无法解决: {1}.',
  'installer.step3.hostWarningsPopup.action.exists': '存在',
  'installer.step3.hostWarningsPopup.action.notRunning': '没有运行',
  'installer.step3.hostWarningsPopup.action.installed': '安装',
  'installer.step3.hostWarningsPopup.action.running': '运行',
  'installer.step3.hostWarningsPopup.action.invalid': '无效',
  'installer.step3.hostWarningsPopup.action.failed': '失败',
  'installer.step3.hostWarningsPopup.action.enabled': '启用',
  'installer.step3.hostWarningsPopup.host': '主机',
  'installer.step3.hostWarningsPopup.hosts': '主机',
  'installer.step3.hostWarningsPopup.moreHosts': '{0} 更多主机...<br>点击链接查看所有主机.',
  'installer.step3.hostWarningsPopup.allHosts': '主机列表',
  'installer.step3.hostWarningsPopup.rerunChecks': '重新运行检查',
  'installer.step3.hostWarningsPopup.hostHasWarnings':
    '警告: 某些主机上的主机检查失败.强烈建议您先解决这些问题,然后再继续防止群集安装中的重大问题.您确定要忽略这些警告并继续?',
  'installer.step3.warningsWindow.allHosts': '所有主机的警告',
  'installer.step3.warningsWindow.warningsOn': '警告',
  'installer.step3.warningsWindow.directoriesAndFiles': '目录和文件',
  'installer.step3.warningsWindow.noWarnings': '没有警告',
  'installer.step3.hosts.noHosts': '没有主机显示',
  'installer.step3.warnings.popup.header': '主机检查',
  'installer.step3.warnings.description': '在对上述主机进行检查时遇到一些警告.',
  'installer.step3.warnings.linkText': '点击这里查看警告.',
  'installer.step3.noWarnings.linkText': '点击这里查看检查结果.',
  'installer.step3.warnings.noWarnings': '所有主机检查都在{0}注册的主机上传递.',
  'installer.step3.warnings.fails': '在对上述{0}注册的主机进行检查时遇到一些警告',
  'installer.step3.warnings.someWarnings':
    '所有主机检查都在{0}注册的主机上传递.注意: 主机检查在{1}未能注册的主机上跳过.',
  'installer.step3.warnings.allFailed': '主机检查在{0}主机上被跳过,无法注册.',
  'installer.step3.warnings.updateChecks.success': '主机检查成功更新',
  'installer.step3.warnings.updateChecks.failed': '主机检查更新失败',
  'installer.step3.warnings.missingHosts': '没有注册主机',
  'installer.step3.warning.registeredHosts': '{0} 其他注册主机',
  'installer.step3.warning.loading': '正在检查主机是否有潜在的问题请等待...',
  'installer.step3.registeredHostsPopup': '这些是在服务器上注册但不出现在要添加的主机列表中的主机.',
  'installer.step3.removeSelected': '删除选定',
  'installer.step3.retryFailed': '重试失败',
  'installer.step3.hosts.status.registering': '注册',
  'installer.step3.hosts.status.installing': '安装',
  'installer.step3.hosts.bootLog.failed': '\n与服务器注册失败.',
  'installer.step3.hosts.bootLog.registering': '\n注册服务器...',
  'installer.step3.hostLogPopup.highlight': '点击突出显示',
  'installer.step3.hostLogPopup.copy': '按CTRL+C',
  'installer.step3.hostsTable.selectAll': '选择所有主机',
  'installer.step3.selectedHosts.popup.header': '所选主机',

  'installer.step4.header': '选择服务',
  'installer.step4.body': '选择你要在你的群集上安装哪些服务.',
  'installer.step4.fsCheck.popup.header': '需要文件系统',
  'installer.step4.fsCheck.popup.body':
    '你没有选择一个文件系统,但是必须选择一个.我们会自动添加{0}.这个可以吗?',
  'installer.step4.multipleDFS.popup.header': '选择多个文件系统',
  'installer.step4.multipleDFS.popup.body': '您选择了多个文件系统.我们将自动选择{0}.这个可以吗?',
  'installer.step4.serviceCheck.popup.header': '需要{0}',
  'installer.step4.serviceCheck.popup.body':
    '您没有选择{0},但是您选择的其他服务需要它.我们会自动添加{0}.这个可以吗?',
  'installer.step4.limitedFunctionality.popup.header': '限制功能警告',
  'installer.step4.ambariMetricsCheck.popup.body':
    'Ambari Metrics从集群收集指标,并将其提供给Ambari.如果您不安装Ambari Metrics服务,Ambari将无法访问指标.没有Ambari Metrics,你确定要继续吗?',
  'installer.step4.ambariInfraCheck.popup.body':
    '由于Ambari Infra没有被选中，您必须提供自己的Solr来使Atlas工作.你确定要继续吗?',
  'installer.step4.ambariLogsearchCheck.popup.body':
    '由于未选择Ambari Infra，您必须提供自己的Solr以使日志搜索工作.你确定要继续吗?',
  'installer.step4.smartSenseCheck.popup.body':
    'SmartSense安全地收集集群诊断,以便向您发送建议并自动分析' +
    '疑难解答支持案例.如果您选择不安装SmartSense,您将不会收到任何建议,而您' +
    '需要手动收集配置和日志来排除支持情况.' +
    '没有SmartSense,你确定要继续吗?',
  'installer.step4.rangerRequirements.popup.header': 'Ranger要求',
  'installer.step4.rangerRequirements.popup.body.requirements':
    '<ol><li>您必须运行一个<strong>MySQL/Oracle/Postgres/MSSQL/SQL Anywhere 服务</strong> 数据库实例,以运行Ranger.</li>' +
    '<li>在此向导的分配Masters步骤中,将提示您指定Ranger Admin的主机.在该主机上,您<strong>必须安装DB Client</strong>以便Ranger访问数据库.(注: 这仅适用于 Ranger 0.4.0)</li>' +
    '<li>确保DB管理员用户的访问权限在任何主机的DB服务器中启用.</li>' +
    '<li>在Ambari Server主机上执行以下命令.替换<code>database-type</code> 使用 <strong>mysql|oracle|postgres|mssql|sqlanywhere</strong> 和 <code>/jdbc/driver/path</code>根据相应的JDBC驱动程序的位置:' +
    '<pre>ambari-server setup --jdbc-db={database-type} --jdbc-driver={/jdbc/driver/path}</pre></li></ol>',
  'installer.step4.rangerRequirements.popup.body.confirmation': '我已经满足了上述所有要求.',
  'installer.step4.sparkWarning.popup.body':
    'Spark需要HDP 2.2.2或更高版本.尝试将Spark安装到HDP 2.2.0群集将失败.确认您正在使用HDP 2.2.2或更高版本的软件包.你确定要继续吗?',

  'installer.step5.header': '指定主机',
  'installer.step5.reassign.header': '选择目标主机',
  'installer.step5.attention': '主机不运行master服务',
  'installer.step5.body': '将master组件分配给要运行它们的主机.',
  'installer.step5.body.coHostedComponents':
    '<i class =“glyphicon glyphicon-asterisks”>&#10037;</ i> {0}将托管在同一主机上.',
  'installer.step5.hostInfo': '%@ (%@, %@ cores)',
  'installer.step5.hiveGroup': 'HiveServer2, WebHCat Server, MySQL Server',
  'installer.step5.validationIssuesAttention.header': '验证问题',
  'installer.step5.validationIssuesAttention': 'Master组件分配具有需要关注的问题.',
  'installer.step5.error.host.invalid':
    '您选择的主机可能(1)主机名无效;(2)与另一选择冲突; 或(3)处于维修模式',

  'installer.step6.header': '分配从属和客户端',
  'installer.step6.body':
    '将从属和客户端组件分配给要运行它们的主机.被分配主组件的主机将显示 <i class="glyphicon glyphicon-asterisks">&#10037;</i>.',
  'installer.step6.body.clientText': ' <br/>&quot;客户端&quot; 将安装 ',
  'installer.step6.error.mustSelectOne': '您必须为每个组件分配至少一个主机.',
  'installer.step6.error.mustSelectOneForHost': '您必须至少为每个分配一个从属/客户端组件.',
  'installer.step6.error.mustSelectComponents': '您必须至少分配: {0}',
  'installer.step6.wizardStep6Host.title': '主组件托管在{0}',
  'installer.step6.addHostWizard.body': '分配HBase主机和ZooKeeper服务.',
  'installer.step6.error.mustSelectOneForSlaveHost':
    '您必须为每个主机分配至少一个从站/客户端组件,而不需要主站组件',
  'installer.step6.validationSlavesAndClients.hasIssues': '您的从属和客户端分配有问题. ',
  'installer.step6.validationSlavesAndClients.click': '点击',
  'installer.step6.validationSlavesAndClients.forDetails': ' 详细信息.',
  'installer.step6.validationSlavesAndClients.popup.header': '分配从属和客户端问题',
  'installer.step6.validationSlavesAndClients.popup.body': '从属和客户端组件的分配有以下问题',
  'installer.step6.validationIssuesAttention.header': '验证问题',
  'installer.step6.validationIssuesAttention': '从属和客户端组件分配有问题需要注意.',

  'installer.step7.header': '自定义服务',
  'installer.step7.body': '我们已经提出了您选择的服务的推荐配置.根据您的需要定制他们.',
  'installer.step7.attentionNeeded': '<b>注意:</b> 有些配置需要您的注意才能继续.',
  'installer.step7.noIssues': '所有配置都被解决了.',
  'installer.step7.showPropertiesWithIssues': '显示有问题的属性',
  'installer.step7.showingPropertiesWithIssues': '显示有问题的属性.',
  'installer.step7.showAllProperties': '显示所有属性',
  'installer.step7.config.addProperty': '添加属性',
  'installer.step7.ConfigErrMsg.header': '自定义配置错误: ',
  'installer.step7.ConfigErrMsg.message': '自定义配置中出错.框中输入的某些属性已经在此页面上公开了',
  'installer.step7.popup.currentValue': '当前值',
  'installer.step7.popup.adjustedValue': '调整后的值',
  'installer.step7.popup.rddWarning.header': '警告: 磁盘空间低于{0}',
  'installer.step7.popup.rddWarning.body':
    'Ganglia服务器日志建议至少为16GB,但{1}上的磁盘安装"{0}"空间不足({2}). 转到Misc选项卡,更改Ganglia rrdcached基本目录,磁盘空间超过16GB.如果您不改变它,则{1}可能会耗尽磁盘空间,并且无法使用.',
  'installer.step7.popup.mySQLWarning.header': '错误: 用于Hive冲突的新MySQL数据库',
  'installer.step7.popup.mySQLWarning.body':
    '您不能在与Ambari Server MySQL服务器相同的主机上安装Hive的"New MySQL Database ". 请返回 <b>指定主机</b> 并将Hive重新分配给另一个主机 <b>或者</b> 选择 "Existing MySQL Database" 选项,以指定Ambari Server MySQL Server实例的数据库凭据和URL. 如果选择 "Existing MySQL Database" 选项,则需要执行Hive先决条件步骤来准备Hive的MySQL Server实例.',
  'installer.step7.popup.mySQLWarning.button.gotostep5': '转到指定主机',
  'installer.step7.popup.mySQLWarning.button.dismiss': '关闭',
  'installer.step7.popup.mySQLWarning.confirmation.header': '确认: 转到指定主机',
  'installer.step7.popup.mySQLWarning.confirmation.body':
    '您将被带回 "指定主机" 步骤,并将丢失所有当前的自定义.你确定?',
  'installer.step7.popup.database.connection.header': '数据库连接警告',
  'installer.step7.popup.database.connection.body':
    '您没有运行或传递数据库连接测试: {0}.强烈建议您在继续进行连接测试之前防止部署过程中出现故障.',
  'installer.step7.popup.validation.failed.header': '一致性检查失败',
  'installer.step7.popup.validation.failed.body':
    '某些服务配置不正确.您必须根据推荐值更改突出显示的配置.',
  'installer.step7.popup.validation.request.failed.body':
    'T由于未知错误,配置更改无法验证一致性.您的更改尚未保存.你想继续保存并修改吗?',
  'installer.step7.popup.validation.warning.header': '配置',
  'installer.step7.popup.validation.warning.body':
    '某些服务配置未正确配置.我们建议您查看并更改突出显示的配置值.您确定要继续进行而不纠正配置吗?',
  'installer.step7.popup.validation.error.body': '服务配置导致验证错误.请在进行处理之前解决.',
  'installer.step7.popup.oozie.derby.warning':
    'Derby不推荐用于生产用途. 使用Derby,Oozie Server HA和并发连接支持将不可用.',
  'installer.step7.oozie.database.new': '新建 Derby 数据库',
  'installer.step7.hive.database.new.mysql': '新建 MySQL 数据库',
  'installer.step7.hive.database.new.postgres': '新建 PostgreSQL 数据库',
  'installer.step7.addWizard.notEditable': '无法在"添加服务向导"中编辑此配置',
  'installer.step7.misc.notification.configure': '配置电子邮件通知',
  'installer.step7.misc.notification.configure.later': '稍后配置电子邮件通知',
  'installer.step7.misc.notification.use_tls': '使用 TLS',
  'installer.step7.misc.notification.use_ssl': '使用 SSL',

  'installer.step7.preInstallChecks': '预安装检查',
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.header': '跳过预安装检查',
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.body': '不推荐跳过预安装检查.',
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.primary': '忽略并继续',
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.secondary': '运行预安装检查',
  'installer.step7.preInstallChecks.checksPopup.header': '预安装检查',

  'installer.step7.assign.master.body': '将 <strong>{0}</strong> 分配给 {1},你想要运行{2}.',
  'installer.step7.assign.master.dependent.component.body': '如果不存在{0}也将安装在选定的主机上. ',
  'installer.step7.missing.service.header': '缺少服务',
  'installer.step7.missing.service.body': '{0}服务应该添加到集群{1}.',
  'assign.master.popup.header': '选择{0}主机',
  'assign.master.popup.cancel.body': '不选{0}主机将禁用交互式查询.',

  'installer.step8.header': '评论',
  'installer.step8.body': '请检查安装前的配置',
  'installer.step8.kerberors.warning':
    '<strong>由于Kerberos已经在集群上手动安装, 所以在此操作完成后您必须创建/分发主体和keytab.</strong>',
  'installer.step8.deployPopup.message': '准备部署: 完成{1}项任务中的{0}项.',
  'installer.step8.hosts': ' hosts',
  'installer.step8.host': ' host',
  'installer.step8.other': '和{0}其他hosts',
  'installer.step8.repoInfo.osType.redhat6': 'RHEL 6/CentOS 6/Oracle Linux 6',
  'installer.step8.repoInfo.osType.redhat5': 'RHEL 5/CentOS 5/Oracle Linux 5',
  'installer.step8.repoInfo.osType.sles11': 'SLES 11/SUSE 11',
  'installer.step8.repoInfo.displayName': '库',
  'installer.step8.services.restart.required': '{0} {1}将在安装过程中重新启动.',
  'installer.step9.header': '安装,启动和测试',
  'installer.step9.body': '所选服务安装并启动,请等待.',
  'installer.step9.status.success': '成功安装并启动服务.',
  'installer.step9.status.skipStartSuccess': '成功安装服务.',
  'installer.step9.status.warning': '安装并启动了一些警告的服务.',
  'installer.step9.status.failed': '无法安装/启动服务.',
  'installer.step9.status.start.services.failed': '启动所有服务API调用失败.',
  'installer.step9.status.install.components.failed': '某些服务组件尚未成功安装.请重试',
  'installer.step9.status.hosts.heartbeat_lost': 'Ambari代理不在{0}主机上运行.',
  'installer.step9.host.heartbeat_lost': '主机丢失Heartbeat',
  'installer.step9.host.heartbeat_lost_popup': 'Ambari代理进程在主机上没有心跳',
  'installer.step9.host.heartbeat_lost.header': '主机丢失heartbeat',
  'installer.step9.host.status.success': '成功',
  'installer.step9.host.status.startAborted': '安装完成. 开始终止',
  'installer.step9.host.status.warning': '遇到警告',
  'installer.step9.host.status.failed': '遇到失败',
  'installer.step9.host.status.nothingToInstall': '安装完成 (等待启动)',
  'installer.step9.hosts.status.label.inProgress': '正在进行',
  'installer.step9.hosts.status.label.warning': '警告',
  'installer.step9.hosts.filteredHostsInfo': '显示{1}主机的{0}',
  'installer.step9.hostLog.popup.header': '任务. 执行 ',
  'installer.step9.hostLog.popup.categories.all': '全部',
  'installer.step9.hostLog.popup.categories.pending': '排队 / 待定',
  'installer.step9.hostLog.popup.categories.in_progress': '正在进行',
  'installer.step9.hostLog.popup.categories.failed': '失败',
  'installer.step9.hostLog.popup.categories.completed': '成功',
  'installer.step9.hostLog.popup.categories.aborted': '中止',
  'installer.step9.hostLog.popup.categories.timedout': '超时',
  'installer.step9.hostLog.popup.noTasksToShow': '无任务显示',
  'installer.step9.host.status.noTasks':
    'Ambari服务器没有在主机上安排任何任务.主机上的服务组件已经处于安装状态<b>或者</b>主机可达性的预检查失败.',
  'installer.step9.overallProgress': '{0} % 整体',
  'installer.step9.serviceStatus.install.pending': '准备安装 ',
  'installer.step9.serviceStatus.install.queued': '等待安装 ',
  'installer.step9.serviceStatus.install.inProgress': '正在安装 ',
  'installer.step9.serviceStatus.install.completed': '成功安装 ',
  'installer.step9.serviceStatus.install.failed': '安装失败 ',
  'installer.step9.serviceStatus.uninstall.pending': '准备卸载 ',
  'installer.step9.serviceStatus.uninstall.queued': '等待卸载 ',
  'installer.step9.serviceStatus.uninstall.inProgress': '正在卸载',
  'installer.step9.serviceStatus.uninstall.completed': '成功卸载 ',
  'installer.step9.serviceStatus.uninstall.failed': '卸载失败',
  'installer.step9.serviceStatus.start.pending': '准备启动 ',
  'installer.step9.serviceStatus.start.queued': '等待启动 ',
  'installer.step9.serviceStatus.start.inProgress': '正在启动 ',
  'installer.step9.serviceStatus.start.completed': ' 开始启动',
  'installer.step9.serviceStatus.start.failed': ' 启动失败',
  'installer.step9.serviceStatus.stop.pending': '准备停止 ',
  'installer.step9.serviceStatus.stop.queued': '等待停止 ',
  'installer.step9.serviceStatus.stop.inProgress': '正在停止 ',
  'installer.step9.serviceStatus.stop.completed': ' 成功停止',
  'installer.step9.serviceStatus.stop.failed': ' 停止失败',
  'installer.step9.serviceStatus.execute.pending': '准备执行 ',
  'installer.step9.serviceStatus.execute.queued': '等待执行 ',
  'installer.step9.serviceStatus.execute.inProgress': '正在执行 ',
  'installer.step9.serviceStatus.execute.completed': ' 成功执行',
  'installer.step9.serviceStatus.execute.failed': ' 执行失败',
  'installer.step9.serviceStatus.abort.pending': '准备中止 ',
  'installer.step9.serviceStatus.abort.queued': '等待中止 ',
  'installer.step9.serviceStatus.abort.inProgress': '正在中止 ',
  'installer.step9.serviceStatus.abort.completed': ' 成功中止',
  'installer.step9.serviceStatus.abort.failed': ' 中止失败',
  'installer.step9.components.install.failed': '安装失败',
  'installer.step9.service.start.failed': '启动安装的服务有问题. 请去个别服务页面启动他们.',
  'installer.step9.service.start.header': '启动服务',

  'installer.step10.header': '总结',
  'installer.step10.body': '这是安装过程的总结.',
  'installer.step10.staleServicesRestartRequired':
    ' 您可能还需要为新添加的其他服务重新启动 ' +
    '服务正常运行 (例如, HDFS 和 YARN/MapReduce 需要在添加Oozie后重新启动). 关闭这个 ' +
    '向导，请重新启动在服务名称旁边重新启动指示符<i class ="glyphicon glyphicon-refresh"> </ i>的所有服务.',
  'installer.step10.hostsSummary': '集群由{0}主机组成',
  'installer.step10.installedAndStarted': '在{0}新建成功安装并启动服务 ',
  'installer.step10.installed': '已成功安装在{0}新的服务 ',
  'installer.step10.warnings': ' 警告',
  'installer.step10.clusterState.installing': '安装 ',
  'installer.step10.clusterState.starting': '开始 ',
  'installer.step10.taskStatus.failed': ' 失败',
  'installer.step10.taskStatus.aborted': ' 中止 ',
  'installer.step10.taskStatus.timedOut': ' 超时 ',
  'installer.step10.installStatus.failed': '安装Master服务失败',
  'installer.step10.installStatus.installed': 'Master服务已安装',
  'installer.step10.master.installedOn': '{0}安装在{1}上',
  'installer.step10.startStatus.failed': '启动服务失败',
  'installer.step10.startStatus.skipped': '跳过启动服务',
  'installer.step10.startStatus.passed': '所有测试通过',
  'installer.step10.startStatus.started': '所有服务启动',
  'installer.step10.installTime.seconds': '在{0}秒内安装并启动完成',
  'installer.step10.installTime.minutes': '在{0}分钟和{1}秒内安装并启动完成',

  'addHost.step4.header': '配置',
  'addHost.step4.title': '选择添加的主机所属的配置组.',

  'form.create': '创建',
  'form.save': '保存',
  'form.cancel': '取消',
  'form.passwordRetype': '重新输入密码',
  'form.saveSuccess': '成功保存.',
  'form.saveError': '对不起,发生错误.',
  'form.item.placeholders.typePassword': '输入密码',

  'form.validator.invalidIp': '请输入有效的ip地址',
  'form.validator.configKey': '无效值.只允许使用字母数字,连字符,下划线,星号和周期.',
  'form.validator.configGroupName': '组名无效.只允许使用字母数字,连字符,空格和下划线.',
  'form.validator.alertGroupName': '警报组名称无效.只允许使用字母数字,连字符,空格和下划线.',
  'form.validator.alertNotificationName':
    '无效的警报通知名称.只允许使用字母数字,连字符,空格和下划线.',
  'form.validator.configKey.specific': '"{0}"无效值.只允许使用字母数字,连字符,下划线,星号和周期.',

  'alerts.dropdown.dialog.title': '通知',
  'alerts.dropdown.dialog.filters.critical': '危险 ({0})',
  'alerts.dropdown.dialog.filters.warning': '警告 ({0})',
  'alerts.dropdown.dialog.filters.all': '所有 ({0})',

  'alerts.add.header': '创建警报',
  'alerts.add.step1.header': '选择警报类型',
  'alerts.add.step1.header.description': '选择你想警报的类型',
  'alerts.add.step2.header': '定义警报',
  'alerts.add.step3.header': '指定阈值',
  'alerts.add.step3.selectedType': '所选类型',

  'alerts.add.wizard.step1.body.choose.tooltip': '单击选择',
  'alerts.add.wizard.step1.body.port.description': '检查到远程端点的TCP连接',
  'alerts.add.wizard.step1.body.web.description': '检查TCP连接，并验证是否返回了适当的HTTP响应代码',
  'alerts.add.wizard.step1.body.metric.description': '定义可以查询值的JMX / AMS端点',
  'alerts.add.wizard.step1.body.script.description':
    '将所有功能延迟到指定相对路径或绝对路径的Ambari代理可访问的Python脚本',
  'alerts.add.wizard.step1.body.aggregate.description': '结合来自不同节点的另一个警报定义的结果',
  'alerts.add.wizard.step1.body.raw.description': '用户可以使用JSON脚本上传警报参数',

  'alerts.fastAccess.popup.header': '{0}关键或警告警报',
  'alerts.fastAccess.popup.body.name': '警报定义名称',
  'alerts.fastAccess.popup.body.showmore': '转到警报定义',
  'alerts.fastAccess.popup.body.noalerts': '没有关键或警告提示显示',

  'alerts.actions.create': '创建警告',
  'alerts.actions.manageGroups': '管理警报组',
  'alerts.actions.manageNotifications': '管理通知',
  'alerts.actions.manageNotifications.info': '您可以管理通知方式和收件人.',
  'alerts.actions.editRepeatTolerance.header': '编辑警报检查计数',
  'alerts.actions.editRepeatTolerance.title': '警报检查计数',
  'alerts.actions.editRepeatTolerance.description':
    '设置在发送通知之前要执行的警报检查的数量. ' +
    '如果在警报状态检查发生状态更改,Ambari将在发送通知之前尝试检查此次数. ' +
    '如果您的环境遇到短暂的问题导致虚假警报,请增加此数字.',
  'alerts.actions.editRepeatTolerance.label': '检查计数:',
  'alerts.actions.editRepeatTolerance.error': '输入应该是1到99之间的整数.',
  'alerts.actions.manageSettings': '管理警报设置',
  'alerts.actions.manageSettings.error': '远程命令中的错误: ',

  'alerts.groups.successPopup.header': '警报组处理结果',
  'alerts.groups.successPopup.body.created': '新建警报组',
  'alerts.groups.successPopup.body.updated': '更新警报组',
  'alerts.groups.successPopup.body.deleted': '删除警报组',

  'alerts.table.noAlerts': '无警告显示',
  'alerts.table.header.lastTriggered': '上次已更改状态',
  'alerts.table.header.lastChecked': '上次检查',
  'alerts.table.header.lastTrigger': '上次更改',
  'alerts.table.header.check.response': '响应',
  'alerts.table.header.definitionName': '警报定义名称',
  'alerts.table.header.notification': '通知',
  'alerts.table.header.repeatTolerance': '检查计数',
  'alerts.table.header.default': '(默认)',
  'alerts.table.header.helpUrl': '警报上下文',
  'alerts.table.state': '状态',
  'alerts.table.state.enabled': '启用',
  'alerts.table.state.disabled': '禁用',
  'alerts.table.state.enabled.tooltip': '单击以禁用此警报定义',
  'alerts.table.state.disabled.tooltip': '点击启用此警报定义',
  'alerts.table.state.enabled.confirm.msg': '您即将禁用此警报定义.',
  'alerts.table.state.disabled.confirm.msg': '您即将启用此警报定义.',
  'alerts.table.state.enabled.confirm.btn': '确认禁用',
  'alerts.table.state.disabled.confirm.btn': '确认启用',
  'alerts.filters.filteredAlertsInfo': '{0}的{1}定义显示',
  'alerts.definition.name': '警报定义名称',
  'alerts.saveChanges': '你有未保存的更改',

  'alert.definition.name.invalid':
    '输入无效. 只允许使用字母数字，下划线，连字符，百分比，括号和空格. 值应小于255个符号.',
  'alerts.definition.details.enable': '启用',
  'alerts.definition.details.disable': '禁用',
  'alerts.definition.details.enableDisable': '启用 / 禁用',
  'alerts.definition.details.groups': '组',
  'alerts.definition.details.instances': '实例',
  'alerts.definition.details.serviceHost': '服务 / 主机',
  'alerts.definition.details.24-hour': '24-小时',
  'alerts.definition.details.notification': '通知',
  'alerts.definition.details.noAlerts': '没有警报实例要显示',
  'alerts.definition.details.configs.thresholdsErrorMsg': '临界阈值应大于警告阈值',

  'alerts.notifications.error.email': '必须是有效的电子邮件地址',
  'alerts.notifications.error.integer': '必须是整数',
  'alerts.notifications.error.host': '主机必须是有效的完全限定域名（FQDN）',

  'alerts.notifications.error.SMTPUsername': '需要用户名',
  'alerts.notifications.error.SMTPPassword': '需要密码',
  'alerts.notifications.error.retypePassword': '密码确认必须匹配密码',

  'alerts.notifications.addCustomPropertyPopup.header': '添加属性',
  'alerts.notifications.addCustomPropertyPopup.error.propertyExists':
    '具有当前名称的自定义属性已存在',
  'alerts.notifications.addCustomPropertyPopup.error.invalidPropertyName':
    '属性名称只能包含字母,数字.或 -_* 字符',

  'wizard.progressPage.notice.completed': '请继续下一步.',
  'wizard.progressPage.notice.failed': '您可以单击重试按钮重试失败的任务.',
  'wizard.singleRequest.progressPage.notice.failed': '请点击重试链接重试失败的请求.',

  'admin.advanced.caution': '本节仅供高级用户使用.<br/>请谨慎行事.',
  'admin.advanced.button.uninstallIncludingData': '卸载包含所有数据的群集.',
  'admin.advanced.button.uninstallKeepData': '卸载集群但保留数据.',

  'admin.advanced.popup.header': '卸载群集',

  /*'admin.advanced.popup.text':'Uninstall Cluster',*/

  'admin.audit.grid.date': '日期/时间',
  'admin.audit.grid.category': '类别',
  'admin.audit.grid.operationName': '操作',
  'admin.audit.grid.performedBy': '执行者',
  'admin.audit.grid.service': '类别',

  'admin.authentication.form.method.database': '使用Ambari数据库验证用户',
  'admin.authentication.form.method.ldap': '使用LDAP/活动目录进行身份验证',
  'admin.authentication.form.primaryServer': '主服务器',
  'admin.authentication.form.secondaryServer': '辅助服务器',
  'admin.authentication.form.useSsl': '使用SSL',
  'admin.authentication.form.bind.anonymously': '匿名绑定',
  'admin.authentication.form.bind.useCrenedtials': '使用凭据绑定',
  'admin.authentication.form.bindUserDN': '绑定用户DN',
  'admin.authentication.form.searchBaseDN': '搜索基本DN',
  'admin.authentication.form.usernameAttribute': '用户名属性',

  'admin.authentication.form.userDN': '用户DN',
  'admin.authentication.form.configurationTest': '配置测试',
  'admin.authentication.form.testConfiguration': '测试配置',

  'admin.authentication.form.test.success': '配置通过测试',
  'admin.authentication.form.test.fail': '配置没有通过测试',

  'admin.kerberos.credentials.store.hint.supported':
    '选中后, Ambari将存储KDC管理员凭据, 以便在将来更改服务, 主机和组件时不需要重新输入.',
  'admin.kerberos.credentials.store.hint.not.supported': 'Ambari没有配置为存储凭据',
  'admin.kerberos.credentials.store.label': '保存管理凭据',
  'admin.kerberos.credentials.store.menu.label': '管理KDC证书',
  'admin.kerberos.credentials.form.header.stored': '更新或删除加密凭据存储中存储的KDC凭证.',
  'admin.kerberos.credentials.form.header.not.stored': '指定加密凭据存储中记住的KDC管理凭据.',
  'admin.kerberos.credentials.remove.confirmation.header': '删除KDC证书确认',
  'admin.kerberos.credentials.remove.confirmation.body': '您将从Ambari中删除KDC证书. 确定此操作?',
  'admin.kerberos.wizard.configuration.note': '这是由启用Kerberos向导创建的初始配置.',
  'admin.kerberos.wizard.header': '启用Kerberos向导',
  'admin.kerberos.button.enable': '启用Kerberos',
  'admin.kerberos.button.disable': '禁用Kerberos',
  'admin.kerberos.button.regenerateKeytabs': '再生的Keytabs',
  'admin.kerberos.wizard.exit.warning.msg':
    '配置Kerberos正在进行中. 您真的要退出启用Kerberos向导吗?',
  'admin.kerberos.wizard.exit.critical.msg':
    '配置Kerberos正在进行中. <strong>在关闭之前, 您应该完成向导.</strong>您是否真的要退出启用Kerberos向导?',
  'admin.kerberos.wizard.step1.header': '开始使用',
  'admin.kerberos.wizard.step2.header': '配置Kerberos',
  'admin.kerberos.wizard.step3.header': '安装和测试Kerberos客户端',
  'admin.kerberos.wizard.step3.checkbox.ignoreAndProceed.label': '忽略错误并继续下一步',
  'admin.kerberos.wizard.step4.header': '配置身份',
  'admin.kerberos.wizard.step5.header': '确认配置',
  'admin.kerberos.wizard.step6.header': '停止服务',
  'admin.kerberos.wizard.step7.header': 'Kerberize集群',
  'admin.kerberos.wizard.step8.header': '启动和测试服务',
  'admin.kerberos.wizard.step1.info.body':
    '欢迎来到Ambari安全向导. 使用此向导可以确保kerberos在您群集中的安全性. </br>让我们开始吧.',
  'admin.kerberos.wizard.step1.alert.body':
    '注意: 此过程需要重新启动服务并集群停机. 同样, 根据您选择的选项, 可能需要安全管理员的支持. 请合理规划.',
  'admin.kerberos.wizard.step1.body.text': '您打算使用什么类型的KDC?',
  'admin.kerberos.wizard.step1.option.kdc': '现已拥有MIT KDC',
  'admin.kerberos.wizard.step1.option.kdc.condition.1':
    'Ambari服务器和群集主机具有对KDC和KDC管理主机的网络访问.',
  'admin.kerberos.wizard.step1.option.kdc.condition.2': '现已拥有KDC行政凭证.',
  'admin.kerberos.wizard.step1.option.kdc.condition.3':
    '已在Ambari Server主机和集群中的所有主机上设置了Java加密扩展(JCE).',
  'admin.kerberos.wizard.step1.option.manual': '手动管理Kerberos主体和keytab',
  'admin.kerberos.wizard.step1.option.manual.condition.1': '群集主机有权对KDC进行网络访问',
  'admin.kerberos.wizard.step1.option.manual.condition.2':
    'Kerberos客户端实用程序(如kinit)已安装在每个群集主机上',
  'admin.kerberos.wizard.step1.option.manual.condition.3':
    '已在Ambari Server主机和集群中的所有主机上设置了Java加密扩展(JCE)',
  'admin.kerberos.wizard.step1.option.manual.condition.4':
    '在完成此向导之前, 服务和Ambari主体将在KDC中手动创建',
  'admin.kerberos.wizard.step1.option.manual.condition.5':
    '在完成此向导之前, 将手动创建服务, Ambari主体的keytabs并分发到群集主机',
  'admin.kerberos.wizard.step1.option.ad': '现已拥有Active Directory',
  'admin.kerberos.wizard.step1.option.ad.condition.1':
    'Ambari服务器和群集主机可以对域控制器进行网络访问.',
  'admin.kerberos.wizard.step1.option.ad.condition.2': '已配置Active Directory安全LDAP(LDAPS)连接.',
  'admin.kerberos.wizard.step1.option.ad.condition.3':
    'Active Directory用于主体的用户容器已创建(例如 OU=Hadoop,OU=People,dc=apache,dc=org)',
  'admin.kerberos.wizard.step1.option.ad.condition.4':
    '授权的Active Directory管理凭据控制?°创建, 删除和管理用户账户?±通过之前提到过的用户容器.',
  'admin.kerberos.wizard.step1.option.ad.condition.5':
    '已在Ambari Server主机和集群中的所有主机上设置了Java加密扩展(JCE).',
  'admin.kerberos.wizard.step1.option.ipa': '现已拥有IPA',
  'admin.kerberos.wizard.step1.option.ipa.condition.1': '集群主机加入到IPA域并且主机在DNS中注册',
  'admin.kerberos.wizard.step1.option.ipa.condition.2':
    '对于创建的主体或krbPasswordExpiry属性设置无有效期的密码策略是可写的',
  'admin.kerberos.wizard.step1.option.ipa.condition.3':
    'ipa管理的krb5.conf设置default_ccache_name = /tmp/krb5cc_%{uid}',
  'admin.kerberos.wizard.step1.option.ipa.condition.4':
    '已在Ambari Server主机和集群中的所有主机上设置了Java加密扩展(JCE).',
  'admin.kerberos.wizard.step1.prerequisites.label': '需要检查以下先决条件以在向导中向前推进.',
  'admin.kerberos.wizard.step2.info.body': '请配置kerberos相关属性.',
  'admin.kerberos.wizard.step3.task0.title': '安装Kerberos客户端',
  'admin.kerberos.wizard.step3.task1.title': '测试Kerberos客户端',
  'admin.kerberos.wizard.step3.notice.inProgress': 'Kerberos客户端正在安装和测试之后请等待.',
  'admin.kerberos.wizard.step3.notice.completed': '已经安装并测试了Kerberos服务.',
  'admin.kerberos.wizard.progressPage.notice.inProgress': '群集正在被梳理时请等待',
  'admin.kerberos.wizard.step4.info.body': '为服务用户和hadoop服务组件配置主体名称和keytab位置.',
  'admin.kerberos.wizard.step5.info.body': '请在继续安装过程之前查看配置',
  'admin.kerberos.wizard.step5.moreInfoNonManual.body':
    '使用<b>下载CSV按钮</b>, 您可以下载一个csv文件其中包含由Ambari自动创建的主体和keytab列表.',
  'admin.kerberos.wizard.step5.moreInfoManual.body':
    '重要提示: 使用<b>下载CSV</b>按钮获取Ambari在集群中启用Kerberos所需的<b>必需的</b>主体和keytab列表. <b>不要继续</b>直到手动创建并分发主体和keytab到群集主机.',
  'admin.kerberos.wizard.step5.kdc_type.label': 'KDC类型',
  'admin.kerberos.wizard.step5.kdc_hosts.label': 'KDC主机',
  'admin.kerberos.wizard.step5.realm.label': '领域名称',
  'admin.kerberos.wizard.step5.ldap_url.label': 'LDAP网址',
  'admin.kerberos.wizard.step5.container_dn.label': '容器DN',
  'admin.kerberos.wizard.step5.executable_search_paths.label': '可执行路径',
  'admin.kerberos.wizard.step5.exitWizard': '退出向导',
  'admin.kerberos.wizard.step5.downloadCSV': '下载CSV',
  'admin.kerberos.wizard.step5.group.label': '组用户主体应为其成员',
  'admin.kerberos.wizard.step6.task0.title': '停止服务',
  'admin.kerberos.wizard.step6.task1.title': '删除ATS',
  'admin.kerberos.wizard.step6.notice.inProgress': '服务正在停止请等待.',
  'admin.kerberos.wizard.step6.notice.completed': '服务已成功停止.',
  'admin.kerberos.wizard.step7.notice.inProgress': '群集正在被梳理时请等待.',
  'admin.kerberos.wizard.step7.notice.completed': '已经在集群上成功启用了Kerberos.',
  'admin.kerberos.wizard.step8.notice.inProgress': '服务正在开始和测试中请等待.',
  'admin.kerberos.wizard.step8.notice.completed': '服务已经通过kerberos环境成功测试.',
  'admin.kerberos.wizard.step8.notice.failed':
    '某些服务无法成功启动和执行测试. 单击重试以再次尝试或单击完成以关闭向导并手动修复.',
  'admin.kerberos.wizard.step8.task0.title': '启动和测试服务',

  'admin.kerberos.regenerate_keytabs.popup.body':
    '为群集中<strong>所有</strong>主机重新生成密钥表是一种中断操作, 并且要求重新启动所有组件. 或者, 可以为缺少的主机和组件<key>仅重新生成keytab</strong>, 并且此操作需要选择性地重新启动受影响的主机和服务.',
  'admin.kerberos.regenerate_keytabs.checkbox.label': ' 只能为缺少的主机和组件重新生成密钥表',
  'admin.kerberos.regenerate_keytabs.popup.restart.body':
    '在keytab regerate完成后, 依赖他们的服务<strong>必须</strong>重新启动. 这可以自动完成, 也可以手动完成.',
  'admin.kerberos.regenerate_keytabs.checkbox.restart.label': 'keytab再生后自动重新启动组件',
  'admin.kerberos.service.alert.yarn':
    'YARN日志和本地目录将被删除, ResourceManager状态将被格式化为启用/禁用Kerberos.',

  'admin.kerberos.disable.step1.task0.title': '开启ZooKeeper',
  'admin.kerberos.disable.step1.task1.title': '停止必需的服务',
  'admin.kerberos.disable.step1.task2.title': 'Unkerberize集群',
  'admin.kerberos.disable.step1.task3.title': '移除Kerberos',
  'admin.kerberos.disable.step1.task4.title': '开启服务',
  'admin.kerberos.disable.unkerberize.header': 'unkerberize集群',
  'admin.kerberos.disable.unkerberize.message': '在集群正在被取消镜像时不能退出向导',
  'admin.kerberos.disable.inProgress': '群集正在被取消镜像时请等待',
  'admin.kerberos.disable.notice.completed': '服务已经成功测试, 没有kerberos环境.',
  'admin.kerberos.wizard.step1.notice.inProgress': '群集正在被取消镜像时请等待',

  'admin.manageJournalNode.label': '管理日志节点',
  'admin.manageJournalNode.warning':
    '管理日志节点向导需要启动所有NameNodes并定义Active / Standby状态',
  'admin.manageJournalNode.wizard.header': '管理日志节点向导',
  'admin.manageJournalNode.wizard.step1.header': '分配日志节点',
  'admin.manageJournalNode.wizard.step2.header': '评论',
  'admin.manageJournalNode.wizard.step3.header': '保存命名空间',
  'admin.manageJournalNode.wizard.step4.header': '添加/删除日志节点',
  'admin.manageJournalNode.wizard.step5.header': '格式日志节点',
  'admin.manageJournalNode.wizard.step6.header': '启动Active NameNode',
  'admin.manageJournalNode.wizard.step7.header': 'BootStrap Standby NameNode',
  'admin.manageJournalNode.wizard.step8.header': '开启所有服务',

  'admin.manageJournalNode.wizard.step1.body': '添加或删除日志节点',
  'admin.manageJournalNode.wizard.step3.confirm.hosts.body': '<b>确认您的主机选择.</b>',
  'admin.manageJournalNode.wizard.step3.confirm.config.body':
    '<p><b>查看配置更改.</b></p>' +
    '作为此过程的一部分，需要进行配置更改. 请查看下面的更改，并注意它们仅适用于<b>仅审核</ b>. 此向导中的未来步骤将更新此配置，并自动重新启动<b>所有</ b>服务.',

  'admin.manageJournalNode.wizard.step4.task0.title': '停止Standby NameNode',
  'admin.manageJournalNode.wizard.step4.task1.title': '停止服务',
  'admin.manageJournalNode.wizard.step4.task2.title': '添加日志节点',
  'admin.manageJournalNode.wizard.step4.task3.title': '删除日志节点',
  'admin.manageJournalNode.wizard.step4.task4.title': '开始日志节点',
  'admin.manageJournalNode.wizard.step4.task5.title': '重新配置HDFS',
  'admin.manageJournalNode.wizard.step6.task0.title': '启动Zookeeper服务器',
  'admin.manageJournalNode.wizard.step6.task1.title': '启动Active NameNode',
  'admin.manageJournalNode.wizard.step8.task0.title': '停止HDFS',
  'admin.manageJournalNode.wizard.step8.task1.title': '开始所有服务',

  'admin.manageJournalNode.wizard.step5.bodyHeader': '需要手动步骤：格式化JournalNodes',
  'admin.manageJournalNode.wizard.step7.bodyHeader': '需要手动步骤：BootStrap Standby NameNode',

  'admin.manageJournalNode.step4.save.configuration.note': '此配置由Manage JournalNode向导创建',

  'admin.manageJournalNode.wizard.step8.notice.inProgress': '请等待服务启动',
  'admin.manageJournalNode.wizard.progressPage.notice.inProgress': '正在部署日志时请稍候',
  'admin.manageJournalNode.wizard.step6.notice.inProgress': '请等待相关服务开始',
  'admin.manageJournalNode.wizard.step4.notice.inProgress': '正在部署日志节点时请稍候',
  'admin.manageJournalNode.wizard.step8.notice.completed': '完成对日志节点的更新.',

  'admin.manageJournalNode.wizard.step3.body':
    '<ol>' +
    '<li>登录到NameNode主机<b>{1}</b>.</li>' +
    '<li>将NameNode放在安全模式下 (read-only mode):' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
    '<li>一旦进入安全模式,创建一个检查点:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
    '<li>一旦Ambari检测到NameNode处于安全模式并且检查点已成功创建，您将可以继续.</li>' +
    '<div class="alert alert-warn">如果 <b>下一步</b> 在运行之前，按钮已启用 <b>"步骤 3: 保存 Namespace"</b> 指令, 这意味着有一个最近的检查点，您可以继续运行 <b>"步骤 3: 保存 Namespace"</b> 指令.</div>' +
    '</ol>',

  'admin.manageJournalNode.wizard.step5.body':
    '<ol>' +
    '<li>登录到NameNode主机 <b>{1}</b>.</li>' +
    '<li>通过运行初始化日志节点:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs namenode -initializeSharedEdits\'</div></li>' +
    '<li>一旦Ambari检测到"JournalNodes"已成功初始化，您将可以继续进行.</li>' +
    '</ol>',

  'admin.manageJournalNode.wizard.step7.body':
    '<div class="alert alert-info">' +
    '<ol start="1">' +
    '<li>登录到其他NameNode主机 <b>{1}</b>.<br>' +
    '<div class="alert alert-warn"><strong>重点!</strong> 确保登录到附加NameNode主机.<br>这是与以前的步骤不同的主机.</div>' +
    '</li>' +
    '<li>通过运行初始化附加NameNode的元数据:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs namenode -bootstrapStandby\'</div></li>' +
    '</ol>' +
    '</div>' +
    '完成上述步骤后请继续.',

  'admin.highAvailability': ' 高可用性',
  'admin.highAvailability.button.enable': '启用NameNode HA',
  'admin.highAvailability.button.disable': '禁用NameNode HA',
  'admin.rm_highAvailability.button.enable': '启用ResourceManager HA',
  'admin.rm_highAvailability.button.disable': '禁用ResourceManager HA',
  'admin.ra_highAvailability.button.enable': '启用Ranger Admin HA',
  'admin.highAvailability.disabled': 'NameNode HA被禁用',
  'admin.highAvailability.enabled': 'NameNode HA已启用',
  'admin.rm_highAvailability.disabled': 'ResourceManager HA被禁用',
  'admin.rm_highAvailability.enabled': 'ResourceManager HA已启用',
  'admin.highAvailability.confirmRollbackHeader': '确认还原',
  'admin.highAvailability.confirmRollbackBody': '这将还原在HA向导中完成的所有操作',
  'admin.highAvailability.confirmManualRollbackBody':
    '您正在启用NameNode HA. 如果现在退出, 您必须按照手册说明重新回到非安装设置, 如Ambari用户指南<i>滚动返回NameNode HA</i>部分所述. 确定要退出向导?',
  'admin.highAvailability.error.hostsNum': '您的群集中至少有3个主机才能启用NameNode HA.',
  'admin.highAvailability.error.namenodeStarted': '在启用NameNode HA之前, NameNode必须正在运行.',
  'admin.highAvailability.error.maintenanceMode':
    '为了启用NameNode HA, 所有服务和具有主组件的主机都需要退出维护模式.',
  'admin.highAvailability.error.zooKeeperNum':
    '您的群集中至少有3个ZooKeeper服务器才能启用NameNode HA.',
  'admin.rm_highAvailability.error.hostsNum': '您的群集中至少有3个主机才能启用ResourceManager HA.',
  'admin.rm_highAvailability.error.zooKeeperNum':
    '您的群集中至少有3个ZooKeeper服务器才能启用ResourceManager HA.',
  'admin.rm_highAvailability.closePopup':
    '启用ResourceManager HA向导正在进行中. 您必须允许向导完成Ambari处于可用状态. 如果您选择退出, 则必须按照手册说明完成或还原启用ResourceManager HA, 如Ambari用户指南中所述. 确定要退出向导?',

  'admin.highAvailability.wizard.header': '启用NameNode HA向导',
  'admin.highAvailability.wizard.progressPage.notice.inProgress': 'NameNode HA正在部署时请稍等.',
  'admin.highAvailability.wizard.progressPage.header': '部署',
  'admin.highAvailability.wizard.step1.header': '开始使用',
  'admin.highAvailability.wizard.step1.nameserviceid.tooltip.title': 'Nameservice ID',
  'admin.highAvailability.wizard.step1.nameserviceid.tooltip.content':
    '这将是NameNode HA群集的ID. 例如, 如果将Nameservice ID设置为<b>mycluster</b>, 则HDFS的逻辑URI将为<b>hdfs://mycluster</b>.',
  'admin.highAvailability.wizard.step1.nameserviceid': 'Nameservice ID',
  'admin.highAvailability.wizard.step1.nameserviceid.error':
    '必须由字母, 数字和连字符组成. 不能以连字符开头或结尾.',
  'admin.highAvailability.wizard.step2.header': '选择主机',
  'admin.highAvailability.wizard.step3.header': '评论',
  'admin.highAvailability.wizard.step4.header': '创建检查点',
  'admin.highAvailability.wizard.step4.error.nameNode':
    'NameNode正在停止. 请确保namenode正在运行, 以便成功创建检查点.',
  'admin.highAvailability.wizard.step5.header': '配置组件',
  'admin.highAvailability.wizard.step6.header': '初始化日志节点',
  'admin.highAvailability.wizard.step7.header': '启动组件',
  'admin.highAvailability.wizard.step8.header': '初始化元数据',
  'admin.highAvailability.wizard.step9.header': '完成HA设置',
  'admin.highAvailability.wizard.step4.bodyHeader': '需要手动步骤: 在NameNode上创建检查点',
  'admin.highAvailability.wizard.step6.bodyHeader': '需要手动步骤: 初始化JournalNodes',
  'admin.highAvailability.wizard.step8.bodyHeader': '需要手动步骤: 初始化NameNode HA元数据',

  'admin.rollbackHighAvailability.wizard.step1.header': '选择主机页面',
  'admin.rollbackHighAvailability.wizard.step2.header': '创建检查点页面',
  'admin.rollbackHighAvailability.wizard.step3.header': '进度页',

  'admin.highAvailability.wizard.step5.notice.inProgress': '向导配置组件时请稍等.',
  'admin.highAvailability.wizard.step7.notice.inProgress': '向导正在启动组件,请稍候.',
  'admin.highAvailability.wizard.step9.notice.inProgress': '向导正在完成HA的设置,请稍候.',
  'admin.highAvailability.wizard.rollback.notice.inProgres': '恢复到非HA设置',

  'admin.highAvailability.wizard.step5.header.title': '配置组件',
  'admin.highAvailability.wizard.step7.header.title': '启动组件',
  'admin.highAvailability.wizard.step9.header.title': '完成HA设置',
  'admin.highAvailability.wizard.rollback.header.title': '恢复到非HA设置.',

  'admin.highAvailability.wizard.step5.task0.title': '停止所有服务',
  'admin.highAvailability.wizard.step5.task1.title': '安装附加NameNode',
  'admin.highAvailability.wizard.step5.task2.title': '安装JournalNodes',
  'admin.highAvailability.wizard.step5.task3.title': '重新配置HDFS',
  'admin.highAvailability.wizard.step5.task4.title': '启动JournalNodes',
  'admin.highAvailability.wizard.step5.task5.title': '禁用Secondary NameNode',

  'admin.highAvailability.wizard.step7.task0.title': '启动ZooKeeper服务器',
  'admin.highAvailability.wizard.step7.task1.title': '启动Ambari Infra',
  'admin.highAvailability.wizard.step7.task2.title': '启动Ranger',
  'admin.highAvailability.wizard.step7.task3.title': '启动NameNode',

  'admin.highAvailability.wizard.step9.task0.title': '启动其他NameNode',
  'admin.highAvailability.wizard.step9.task1.title': '安装故障转移控制器',
  'admin.highAvailability.wizard.step9.task2.title': '启动故障切换控制器',
  'admin.highAvailability.wizard.step9.task3.title': '安装PXF',
  'admin.highAvailability.wizard.step9.task4.title': '重新配置Ranger',
  'admin.highAvailability.wizard.step9.task5.title': '重新配置HBase',
  'admin.highAvailability.wizard.step9.task6.title': '重新配置AMS',
  'admin.highAvailability.wizard.step9.task7.title': '重新配置Accumulo',
  'admin.highAvailability.wizard.step9.task8.title': '重新配置HAWQ',
  'admin.highAvailability.wizard.step9.task9.title': '删除Secondary NameNode',
  'admin.highAvailability.wizard.step9.task8.title': '停止HDFS',
  'admin.highAvailability.wizard.step9.task9.title': '启动所有服务',
  'admin.highAvailability.wizard.step9.notice.completed': 'NameNode HA已成功启用.',

  'admin.highAvailability.wizard.step3.curNameNode': '<b>当前 NameNode:</b> ',
  'admin.highAvailability.wizard.step3.addNameNode': '<b>附件 NameNode:</b> ',
  'admin.highAvailability.wizard.step3.secNameNode': '<b>次要 NameNode:</b> ',
  'admin.highAvailability.wizard.step3.journalNode': '<b>JournalNode:</b> ',
  'admin.highAvailability.wizard.step3.toBeInstalled': '需要安装',
  'admin.highAvailability.wizard.step3.toBeDeleted': '需要删除',
  'admin.highAvailability.wizard.step4.ckNotCreated': '检查点尚未创建',
  'admin.highAvailability.wizard.step4.ckCreated': '检查点已创建',
  'admin.highAvailability.step4.save.configuration.note': '此配置由启用{0} HA向导创建',
  'admin.highAvailability.wizard.step6.jsNoInit': 'JournalNodes尚未初始化',
  'admin.highAvailability.wizard.step6.jsInit': 'JournalNodes已初始化',
  'admin.highAvailability.wizard.step6.jnStopped': '所有的 JournalNodes 应该在初始化之前启动',
  'admin.highAvailability.wizard.step8.metaNoInit': '元数据尚未初始化',
  'admin.highAvailability.wizard.step8.confirmPopup.body': '继续之前 请确认您已经运行手动步骤.',
  'admin.highAvailability.wizard.step9.hawq.confirmPopup.header': 'HAWQ需要额外的步骤',
  'admin.highAvailability.wizard.step9.hawq.confirmPopup.body':
    '您必须参考HAWQ文档 ' +
    '"HAWQ文件空间和高可用性启用HDFS" 并执行所需的手动步骤来更新HAWQ文件空间 ' +
    '位置.除非成功完成步骤,否则HAWQ将不会使用HDFS名称服务器.',

  'admin.highAvailability.rollback.header': '禁用NameNode HA向导',
  'admin.highAvailability.rollback.task0.title': '停止所有服务',
  'admin.highAvailability.rollback.task1.title': '恢复HBase配置',
  'admin.highAvailability.rollback.task2.title': '恢复Accumulo配置',
  'admin.highAvailability.rollback.task3.title': '恢复HAWQ配置',
  'admin.highAvailability.rollback.task4.title': '停止故障转移控制器',
  'admin.highAvailability.rollback.task5.title': '删除故障转移控制器',
  'admin.highAvailability.rollback.task6.title': '删除PXF',
  'admin.highAvailability.rollback.task7.title': '停止其他NameNode',
  'admin.highAvailability.rollback.task8.title': '停止NameNode',
  'admin.highAvailability.rollback.task9.title': '恢复HDFS配置',
  'admin.highAvailability.rollback.task10.title': '启动次要NameNode',
  'admin.highAvailability.rollback.task11.title': '停止JournalNodes',
  'admin.highAvailability.rollback.task12.title': '删除JournalNodes',
  'admin.highAvailability.rollback.task13.title': '删除附加NameNode',
  'admin.highAvailability.rollback.task14.title': '启动所有服务',
  'admin.highAvailability.rollback.notice.inProgress': '请稍候,向导将还原到非HA设置.',

  'admin.highAvailability.rollback.step2.body':
    '<ol>' +
    '<li>登录到NameNode主机 <b>{1}</b>.</li>' +
    '<li>将NameNode放在安全模式 (只读模式):' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
    '<li>一旦进入安全模式,创建一个检查点:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
    '</ol>',

  'admin.highAvailability.wizard.step8.body':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>登录到NameNode主机<b>{1}</b>.</li>' +
    '<li>通过运行来初始化NameNode自动故障切换的元数据:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs zkfc -formatZK\'</div></li>' +
    '</div>' +
    '<div class="alert alert-info">' +
    '<ol start="3">' +
    '<li>登录到其他NameNode主机 <b>{2}</b>.<br>' +
    '<div class="alert alert-warning"><strong>重要!</strong> 确保登录到其他NameNode主机.<br>这是与上述步骤1和2不同的主机.</div>' +
    '</li>' +
    '<li>通过运行来初始化附加NameNode的元数据:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs namenode -bootstrapStandby\'</div></li>' +
    '</ol>' +
    '</div>' +
    '完成上述步骤后请继续.',
  'admin.highAvailability.wizard.step6.body':
    '<ol>' +
    '<li>登录到NameNode主机 <b>{1}</b>.</li>' +
    '<li>通过运行初始化JournalNodes:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs namenode -initializeSharedEdits\'</div></li>' +
    '<li>一旦Ambari检测到JournalNodes已成功初始化,您将可以继续进行.</li>' +
    '</ol>',
  'admin.highAvailability.wizard.step4.body':
    '<ol>' +
    '<li>登录到NameNode主机 <b>{1}</b>.</li>' +
    '<li>将NameNode放在安全模式下 (只读模式):' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
    '<li>一旦处于安全模式, 创建一个检查点:' +
    '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
    '<li>一旦Ambari检测到NameNode处于安全模式并且检查点已成功创建,您将可以继续.</li>' +
    '<div class="alert alert-warning">如果<b>下一个</b> 在运行之前,按钮已启用 <b>"步骤4:创建一个检查点"</b> 命令,这意味着有一个最近的检查点,你可以继续运行 <b>"步骤4:创建一个检查点"</b> 命令.</div>' +
    '</ol>',
  'admin.highAvailability.wizard.step3.confirm.host.body': '<b>确认您的主机选择.</b>',
  'admin.highAvailability.wizard.step3.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>查看配置更改.</b></p>' +
    '以下列出了向导将要启用NameNode HA的配置更改. 这个信息是为了 <b> 只有审查 </b> 并且不可编辑  <b>dfs.journalnode.edits.dir</b> property' +
    '</div>',
  'admin.highAvailability.wizard.step2.body':
    '选择一个将运行附加NameNode的主机.<br/> 此外,' +
    ' 选择要运行JournalNodes的主机, 它以容错方式存储NameNode编辑日志.',
  'admin.highAvailability.wizard.step1.body':
    '此向导将引导您在群集上启用NameNode HA.<br/>' +
    '一旦启用,除了您的Active NameNode 您将运行一个Standby NameNode.<br/>' +
    '这允许自动执行故障切换的Active-Standby NameNode配置.<br/><br/>' +
    '启用HA的过程涉及到的组合 <b>自动化步骤</b> (这将由向导处理)  ' +
    '<b>手动步骤</b> (您必须按照向导的指示顺序执行).<br/><br/>' +
    '<b>您应该计划集群维护窗口并准备启用NameNode HA时的集群停机时间.</b>',
  'admin.highAvailability.wizard.step1.alert': '如果你有HBase运行, 请退出此向导并先停止HBase.',
  'admin.highAvailability.wizard.step1.hawq.alert':
    '<br/><br/>您将需要执行其他手册 ' +
    '一旦这个向导完成, 更新HAWQ文件空间位置的步骤. 请参阅HAWQ文档 ' +
    '"HAWQ Filespaces and High Availability Enabled HDFS" 了解更多信息.',

  'admin.rm_highAvailability.wizard.header': '启用ResourceManager HA向导',
  'admin.rm_highAvailability.wizard.step1.header': '开始使用',
  'admin.rm_highAvailability.wizard.step1.body':
    '此向导将引导您在群集上启用ResourceManager HA.<br/>' +
    '启用后, 除了Active ResourceManager之外,还将运行Standby ResourceManager.<br/>' +
    '这允许自动执行故障切换的Active-Standby ResourceManager配置.<br/><br/>' +
    '<b>您应该计划集群维护窗口,并准备启用ResourceManager HA时的集群停机时间.</b>',
  'admin.rm_highAvailability.wizard.step2.header': '选择主机',
  'admin.rm_highAvailability.wizard.step2.body': '选择将运行附加ResourceManager的主机',
  'admin.rm_highAvailability.wizard.step3.header': '检验',
  'admin.rm_highAvailability.wizard.step3.confirm.host.body': '<b>确认您的主机选择.</b>',
  'admin.rm_highAvailability.wizard.step3.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>查看配置更改.</b></p>' +
    '以下列出了向导启用ResourceManager HA的配置更改. 这个信息是为了 <b> 只是审查 </b> 不可编辑.' +
    '</div>',
  'admin.rm_highAvailability.wizard.step3.currentRM': '当前ResourceManager',
  'admin.rm_highAvailability.wizard.step3.additionalRM': '附加ResourceManager',
  'admin.rm_highAvailability.wizard.step4.header': '配置组件',
  'admin.rm_highAvailability.wizard.step4.task0.title': '停止所需的服务',
  'admin.rm_highAvailability.wizard.step4.task1.title': '安装其他ResourceManager',
  'admin.rm_highAvailability.wizard.step4.task2.title': '重新配置YARN',
  'admin.rm_highAvailability.wizard.step4.task3.title': '重新配置HAWQ',
  'admin.rm_highAvailability.wizard.step4.task4.title': '重新配置HDFS',
  'admin.rm_highAvailability.wizard.step4.task5.title': '启动所有服务',
  'admin.rm_highAvailability.wizard.step4.notice.inProgress': 'ResourceManager HA正在部署中请等待.',
  'admin.rm_highAvailability.wizard.step4.notice.completed': 'ResourceManager HA已成功启用.',

  'admin.ra_highAvailability.wizard.header': '启用Ranger管理员HA向导',
  'admin.ra_highAvailability.wizard.step1.header': '开始使用',
  'admin.ra_highAvailability.wizard.step1.body':
    '此向导将引导您在群集上启用Ranger Admin HA.<br/>' +
    '一旦启用, 除了您的Active Ranger管理员之外,您还将运行一个Standby Ranger管理员.<br/>' +
    '这允许Active-Standby Ranger管理员配置自动执行故障切换.<br/><br/>' +
    '<b>您应该计划集群维护窗口并准备启用Ranger Admin HA时的群集停机时间.</b><br/><br/>' +
    '请设置负载平衡器并提供要使用的URL,在继续之前,请确保正确设置负载平衡器.' +
    '<br/><br/><div class="alert">确保Ranger管理员和负载均衡器位于不同的主机上.</div>',
  'admin.ra_highAvailability.wizard.step1.load_balancer_url': '加载平衡器的URL',
  'admin.ra_highAvailability.wizard.step1.invalid_url': '必须是有效的URL',
  'admin.ra_highAvailability.wizard.step2.header': '选择主机',
  'admin.ra_highAvailability.wizard.step2.body': '选择将运行其他Ranger Admin组件的一台或者多台主机',
  'admin.ra_highAvailability.wizard.step2.warning': '确保负载平衡器与Ranger Admin组件分开.',
  'admin.ra_highAvailability.wizard.step3.header': '检验',
  'admin.ra_highAvailability.wizard.step3.alert_message': '<b>确认您的主机选择.</b>',
  'admin.ra_highAvailability.wizard.step3.currentRA': '当前 Ranger Admin',
  'admin.ra_highAvailability.wizard.step3.additionalRA': '附加 Ranger Admin',
  'admin.rm_highAvailability.wizard.step3.configs_changes':
    '<p><b>查看配置更改.</b></p>' +
    '以下列出了向导将启用Ranger Admin HA所做的配置更改. ' +
    '此信息仅适用于<b>仅审核</ b>，不可编辑.',
  'admin.ra_highAvailability.wizard.step4.header': '安装, 启动和测试',
  'admin.ra_highAvailability.wizard.step4.task0.title': '停止所有服务',
  'admin.ra_highAvailability.wizard.step4.task1.title': '安装其他 Ranger Admin',
  'admin.ra_highAvailability.wizard.step4.task2.title': '重新配置服务',
  'admin.ra_highAvailability.wizard.step4.task3.title': '启动所有服务',
  'admin.ra_highAvailability.wizard.step4.notice.inProgress': '正在部署Ranger Admin HA,请稍候.',
  'admin.ra_highAvailability.wizard.step4.notice.completed': 'Ranger Admin HA 已成功启用.',
  'admin.ra_highAvailability.closePopup':
    '启用Ranger管理HA向导正在进行中. 您必须允许向导完成Ambari以处于可用状态. ' +
    '如果你选择退出, 您必须按照手册说明完成或恢复启用Ranger Admin HA,如Ambari用户指南中所述. 你确定要退出向导?',

  'admin.security.title': 'Kerberos安全性尚未启用',
  'admin.security.enabled': 'Kerberos安全性已启用',
  'admin.security.disabled': 'Kerberos安全性被禁用',
  'admin.security.button.enable': '启用安全性',
  'admin.security.button.disable': '禁用安全性',
  'admin.security.enable.popup.body': '我们将引导您完成添加安全向导',
  'admin.security.enable.popup.header': '增加安全性',
  'admin.security.disable.popup.header': '删除安全性',
  'admin.security.disable.popup.body':
    '您即将禁用群集上的Kerberos. 这将停止集群中的所有服务,并删除Kerberos配置. <strong>您确定要继续禁用Kerberos?</strong>',
  'admin.security.step1.header': '开始使用',
  'admin.security.step2.header': '配置服务',
  'admin.security.step3.header': '创建Principals 和 Keytabs',
  'admin.security.step4.header': '保存并应用配置',
  'admin.security.step1.body.header':
    '重要提示: 在配置Ambari以管理启用了Kerberos的群集之前, ' +
    '您必须在群集上执行以下手动步骤. 确保记录keytab文件的位置 ' +
    '为每个主机和每个Hadoop服务的主体. 为了使用向导, 需要这些信息.',
  'admin.security.step1.body.instruction1': '安装, 配置并启动您的Kerberos KDC',
  'admin.security.step1.body.instruction2': '在群集中的每个主机上安装和配置Kerberos客户端',
  'admin.security.step1.body.instruction3': '为Hadoop服务和主机创建Kerberos主体',
  'admin.security.step1.body.instruction4': '为每个主体生成密钥表并在适当的主机上放置',
  'admin.security.step1.body.instruction5':
    '<b>应用程序时间线服务器</b> YARN服务的组成部分将会 <span class="text-danger"><b>删除</b></span>作为在HDP堆栈版本中实现安全性的一部分',
  'admin.security.step2.body.header': '配置Kerberos安全属性',
  'admin.security.step3.notice':
    '您需要在继续之前先创建Kerberos主体和keytab.<br />' +
    '下载CSV文件并使用它创建脚本来生成指定主机上的主体和keytab. ' +
    '一旦建立了主体和keytab, 点击 <i>应用</i> 继续. 如果您需要进行配置更改, 点击 <i>返回</i>.',
  'admin.security.step3.table.principal': 'Principal',
  'admin.security.step3.table.keytab': 'Keytab',
  'admin.security.step3.downloadCSV': '下载 CSV',
  'admin.security.step4.body.header': '将Kerberos安全性应用于群集',
  'admin.security.step4.body.success.header':
    '您的群集上已启用基于Kerberos的安全性. 请等待服务以安全模式启动.',
  'admin.security.step4.body.failure.header':
    '无法在群集上启用基于Kerberos的安全性. 您的群集将继续以非安全模式运行.',
  'admin.security.step4.save.configuration.note': '此配置由启用/禁用安全性向导创建',
  'admin.security.apply.configuration.error':
    '无法将安全配置应用于群集. 请导航到"配置服务"步骤,并确保所有服务都配置了适当的值.',
  'admin.security.disable.body.header': '禁用群集上的kerberos安全性',
  'admin.security.disable.body.success.header':
    '您的群集上已禁用基于Kerberos的安全性. 服务在非安全模式下启动时请等待.',
  'admin.security.disable.body.failure.header':
    '无法在群集上禁用基于Kerberos的安全性. 您的群集将以安全模式继续运行.',
  'admin.security.disable.onClose': '您正在对群集上的安全性进行禁用. ' + '你确定你要退出吗?',
  'admin.removeSecurity.header': '禁用安全性',
  'admin.security.applying.config.header': '应用配置',
  'admin.security.applying.config.body': '在应用配置时,不能退出向导',
  'admin.security.status.error': '从Ambari服务器检索群集安全状态时出错',
  'admin.users.ldapAuthUsed': '正在使用LDAP验证来验证用户',
  'admin.users.delete.yourself.message': '你不能删除自己',
  'admin.users.delete.yourself.header': '删除警告',

  'admin.users.delete.header': '删除 {0}',

  'admin.users.addButton': '添加本地用户',
  'admin.users.editButton': '编辑本地用户',
  'admin.users.delete': '删除',
  'admin.users.edit': '编辑',
  'admin.users.privileges': '管理员',
  'admin.users.type': '类型',
  'admin.users.action': '行为',
  'admin.users.passwordRetype': '重新输入密码',
  'admin.users.username': '用户名',
  'admin.users.createSuccess': '用户成功创建.',
  'admin.users.createError': '用户创建时发生错误.',
  'admin.users.createError.passwordValidation': '密码是不同的',
  'admin.users.createError.userNameExists': '具有相同名称的用户已经存在',
  'admin.users.editError.requiredField': '这是必需的',

  'admin.access.showJobs': '为非管理员用户启用作业选项卡',

  'admin.confirmUninstall': '确认卸载',
  'admin.cluster.stackVersion': '集群堆栈版本',
  'admin.cluster.upgradeAvailable': '升级可用',
  'admin.cluster.upgradeUnavailable': '升级不可用',
  'admin.cluster.repositories.repositories': '存储库',
  'admin.cluster.repositories.os': 'OS',
  'admin.cluster.repositories.baseUrl': '基本URL',
  'admin.cluster.repositories.popup.header.success': '已保存回复基址URL',
  'admin.cluster.repositories.popup.header.fail': '基本URL验证失败',
  'admin.cluster.repositories.popup.body.success': '回复基址URL已成功保存.',
  'admin.cluster.repositories.popup.body.fail': '基本URL验证失败,尚未保存.',
  'admin.cluster.repositories.invalidURLAttention': '<b>注意:</b> 保存前请确保所有存储库URL都有效.',
  'admin.cluster.repositories.emptyURLattention': '<b>注意:</b> 存储库URL是必需的,然后才能保存.',
  'admin.cluster.repositories.skipValidation.tooltip':
    '<b>警告:</b> 这仅适用于高级用户. 如果要跳过Repository Base URL的验证,请使用此选项.',

  'admin.misc.header': '服务用户和组',
  'admin.misc.nothingToShow': '没有用户帐户显示',

  'admin.serviceAutoStart.title': '服务自动启动',
  'admin.serviceAutoStart.header': '服务自动启动配置',
  'admin.serviceAutoStart.header.text':
    'Ambari服务可以配置为在系统启动时自动启动. 每个服务都可以配置为启动所有组件, 主要的和工作的, 或者选择性的.',
  'admin.serviceAutoStart.body.text': '自动启动服务',
  'admin.serviceAutoStart.tooltip.text': '{0} 组件启用',

  'admin.stackVersions.filter.notInstalled': '未安装 ({0})',
  'admin.stackVersions.filter.all': '所有的 ({0})',
  'admin.stackVersions.filter.upgradeReady': '升级就绪 ({0})',
  'admin.stackVersions.filter.installed': '已安装 ({0})',
  'admin.stackVersions.filter.current': '当前 ({0})',
  'admin.stackVersions.filter.upgrading': '升级/降级过程中 ({0})',
  'admin.stackVersions.filter.upgraded': '准备完成 ({0})',
  'admin.stackVersions.upgrade.start.fail.title': '升级无法启动',
  'admin.stackVersions.upgrade.installPackage.fail.title': '软件包无法安装',
  'admin.stackVersions.upgrade.installPackage.fail.timeout': '请求超时.',

  'admin.stackVersions.editRepositories.info': '为您正在配置的操作系统提供基本URL.',
  'admin.stackVersions.editRepositories.validation.warning':
    '一些存储库验证失败. 如果您确定网址正确,请更改基本网址或跳过验证',
  'admin.stackVersions.version.install.confirm':
    '您即将安装版本的软件包 <strong>{0}</strong> 在所有主机上.',
  'admin.stackVersions.version.linkTooltip': '单击以编辑存储库',
  'admin.stackVersions.version.hostsTooltip': '单击以列出主机',
  'admin.stackVersions.version.emptyHostsTooltip': '没有主机要列出',
  'admin.stackVersions.version.notInstalled': '未安装',
  'admin.stackVersions.version.hostsInfoTooltip':
    '有 {0} 台主机不需要安装软件包的:<li>{1} 维护模式</li><li>{2} 不需要</li>',
  'admin.stackVersions.manageVersions': '管理版本',
  'admin.stackVersions.manageVersions.popup.body':
    '你即将离开 <b>集群管理</b> 界面' +
    ' 然后去 <b>Ambari 管理</b> 界面. 您可以使用它返回到集群管理' +
    ' "转到信息中心" 链接在Ambari管理中 > 集群部分.',
  'admin.stackVersions.version.installNow': '安装软件包',
  'admin.stackVersions.version.reinstall': '重新安装软件包',
  'admin.stackVersions.version.performUpgrade': '执行升级',
  'admin.stackVersions.version.upgrade.pause': '升级: 需要采取的行动',
  'admin.stackVersions.version.upgrade.notFinalized.warning':
    '升级尚未完成.集群验证功能后,不要忘记尽快完成升级(在几天内强烈建议),因为在未归档状态下运行集群会导致HDFS上的额外资源需求.',
  'admin.stackVersions.version.upgrade.running': '升级: 正在进行',
  'admin.stackVersions.version.upgrade.aborted': '升级: 中止',
  'admin.stackVersions.version.upgrade.suspended': '升级: 暂停',
  'admin.stackVersions.version.downgrade.pause': '降级: 需要采取行动',
  'admin.stackVersions.version.downgrade.running': '降级: 正在进行',
  'admin.stackVersions.version.downgrade.aborted': '降级: 中止',
  'admin.stackVersions.version.downgrade.suspended': '降级: 暂停',
  'admin.stackUpgrade.state.paused.fail.header': '暂停升级失败',
  'admin.stackUpgrade.state.paused.fail.body': '升级无法暂停. 稍后再试.',
  'admin.stackDowngrade.state.paused.fail.header': '暂停降级失败',
  'admin.stackDowngrade.state.paused.fail.body': '降级无法暂停. 稍后再试.',

  'admin.stackVersions.version.upgrade.upgradeOptions.header': '升级选项',
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.version': '您将执行升级 <b>{0}</b>.',
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.method': '选择升级方式:',
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.tolerance': '选择可选升级故障容错:',
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.option1': '跳过所有从属组件故障',
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.option2': '跳过所有服务检查失败',
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.tooltip':
    '这些升级故障容错选项在大型集群上执行升级并希望最大限度减少用户干预时很有用.',
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.title': '滚动升级',
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.description':
    '升级时服务仍然运行.最小化中断,但升级速度较慢.',
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.title': '快速升级',
  'admin.stackVersions.version.upgrade.upgradeOptions.HOU.title': '主机有序升级',
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.description':
    '服务在执行升级时停止.导致停机时间,但升级速度更快.',
  'admin.stackVersions.version.upgrade.upgradeOptions.errors_bypassed':
    '旁路错误,<br/>继续需要您自担风险.',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.rerun': '重新运行检查',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.title': '检查:',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.checking': '正在检查...',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.failed.title': '检查失败',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.failed.link': '重新运行',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.allPassed': '通过了',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.allPassed.msg': '所有检查通过',
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.failed.tooltip': '选项不可用',
  'admin.stackVersions.version.upgrade.upgradeOptions.notAllowed': '不允许当前版本',
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.confirm.msg':
    '您即将从<b>{0}</b>执行<b>快速升级</b>到<b>{1}</b>.这将导致集群停机.你确定要继续吗?',
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.confirm.msg':
    '您即将从<b>{0}</b>执行<b>滚动升级</b>到<b>{1}</b>.你确定要继续吗?',
  'admin.stackVersions.version.upgrade.upgradeOptions.error': '无法继续升级:',
  'admin.stackVersions.version.upgrade.upgradeOptions.loading': '检查支持的升级类型...',

  'admin.stackVersions.version.upgrade.alertsWarning':
    '集群警报仍然可见并记录在Ambari中,但在升级过程中,通知(如Email和SNMP)将被抑制.',

  'admin.stackVersions.version.column.showDetails': '显示细节',
  'admin.stackVersions.version.column.showDetails.title': '版本细节',
  'admin.stackVersions.version.noCompatible.tooltip': '不支持直接升级到此版本.',

  'admin.stackVersions.hosts.popup.header.current': '当前',
  'admin.stackVersions.hosts.popup.header.installed': '已安装',
  'admin.stackVersions.hosts.popup.header.not_installed': '未安装',
  'admin.stackVersions.hosts.popup.header': '版本状态: {0}',
  'admin.stackVersions.hosts.popup.title': '{0}版本在{2}主机上为{1}:',
  'admin.stackVersions.hosts.popup.primary': '去主机',

  'admin.stackVersions.details.install.hosts.popup.title': '安装 {0} 版本',
  'admin.stackVersions.upgradeHistory.upgrade': '升级',
  'admin.stackVersions.upgradeHistory.downgrade': '降级',
  'admin.stackVersions.upgradeHistory.show.details': '点击显示更多的细节 {0}',
  'admin.stackVersions.upgradeHistory.success': '成功 {0}',
  'admin.stackVersions.upgradeHistory.aborted': '中止 {0}',
  'admin.stackVersions.upgradeHistory.summary': '概要',
  'admin.stackVersions.upgradeHistory.history': '历史',
  'admin.stackVersions.upgradeHistory.filter.all': '所有 ({0})',
  'admin.stackVersions.upgradeHistory.filter.upgrade': '升级 ({0})',
  'admin.stackVersions.upgradeHistory.filter.downgrade': '降级 ({0})',
  'admin.stackVersions.upgradeHistory.filter.successful.upgrade': '成功升级 ({0})',
  'admin.stackVersions.upgradeHistory.filter.successful.downgrade': '成功降级 ({0})',
  'admin.stackVersions.upgradeHistory.filter.aborted.upgrade': '中止升级 ({0})',
  'admin.stackVersions.upgradeHistory.filter.aborted.downgrade': '中止降级 ({0})',
  'admin.stackVersions.upgradeHistory.filter.failed.upgrade': '升级失败 ({0})',
  'admin.stackVersions.upgradeHistory.filter.failed.downgrade': '降级失败 ({0})',
  'admin.stackVersions.upgradeHistory.no.history': '没有升级/降级历史记录',
  'admin.stackVersions.upgradeHistory.record.title': '{0} {1} 到 {2}',

  'admin.stackUpgrade.preCheck.warning.message': '{0} 警告 {1}',
  'admin.stackUpgrade.preCheck.bypass.message': '{0} 错误 {1}',
  'admin.stackUpgrade.preCheck.fail.message': '{0} 需要 {1}',

  'admin.stackUpgrade.finalize.later': '稍后完成',
  'admin.stackUpgrade.finalize.message.upgrade':
    '您的集群版本已升级. ' +
    '当您准备好完成升级并提交到新版本时,单击<b>完成</b>.' +
    ' 强烈建议您在集群上运行测试,以确保在完成之前完全运行测试.' +
    ' <b>一旦升级完成，您将无法回到原始版本.</b>',
  'admin.stackUpgrade.finalize.message.downgrade':
    '您的集群版本已被降级. ' +
    '当您准备好完成降级并提交新版本时,单击<b>完成</b>.' +
    ' 强烈建议您在集群上运行测试,以确保在完成之前完全运行测试.' +
    ' <b>一旦降级完成,您将无法返回到原始版本.</b>',
  'admin.stackUpgrade.finalize.message.autoStart': '如果您禁用升级，请记住重新启用自动启动.',
  'admin.stackUpgrade.finalize.message.skippedServiceChecks':
    '升级期间, 检查以下服务失败,并被跳过:',
  'admin.stackUpgrade.finalize.message.testServices': '强烈建议您在完成升级之前测试这些服务.',
  'admin.stackUpgrade.failedHosts.message': '升级没有成功',
  'admin.stackUpgrade.failedHosts.showHosts': '{0} 主机',
  'admin.stackUpgrade.failedHosts.options': '你的选择:',
  'admin.stackUpgrade.failedHosts.options.first':
    '<b>暂停升级</b>, 删除不健康的主机并返回升级向导继续.',
  'admin.stackUpgrade.failedHosts.options.second':
    '执行<b>降级</b>, 将所有主机恢复到以前的堆栈版本.',
  'admin.stackUpgrade.failedHosts.options.third': '忽略这些故障，现在<b>继续</b>(稍后调整故障).',
  'admin.stackUpgrade.failedHosts.header': '失败主机',
  'admin.stackUpgrade.failedHosts.subHeader': '在{0}主机上升级失败',
  'admin.stackUpgrade.failedHosts.details': '打开详细信息',
  'admin.stackUpgrade.doThisLater': '做这个以后',
  'admin.stackUpgrade.pauseUpgrade': '暂停升级',
  'admin.stackUpgrade.pauseDowngrade': '暂停降级',
  'admin.stackUpgrade.pauseUpgrade.warning':
    "您即将暂停{0}.您可以返回继续{0}并稍后确定,但升级暂停时,您<strong style ='color：red;'> 不应该 </strong>执行任何群集更改.例如:" +
    '<ul><li>不要在群集上添加/删除主机</li>' +
    '<li>不要在集群上添加/删除服务</li>' +
    '<li>不要启用/禁用Kerberos</li>' +
    '<li>不要启用/禁用HA</li>' +
    '<li>不要对服务配置进行任何重大更改</li></ul>' +
    '您<strong>必须</strong>继续{0}并完成<strong>BEFORE</strong>执行<strong>任何</strong>对集群的重大更改.',
  'admin.stackUpgrade.downgrade.proceed': '继续降级',
  'admin.stackUpgrade.downgrade.body': '您确定要中止升级过程并降级到<b>{0}</b>?',
  'admin.stackUpgrade.downgrade.retry.body': '您确定要重试降级到<b>{0}</b>?',
  'admin.stackUpgrade.upgrade.confirm.body': '您即将升级到{0}.',
  'admin.stackUpgrade.upgrade.retry.confirm.body': '您即将重新升级到{0}.',
  'admin.stackUpgrade.title': '堆栈和版本',
  'admin.stackUpgrade.state.inProgress': '正在升级',
  'admin.stackUpgrade.state.paused': '升级暂停',
  'admin.stackUpgrade.state.aborted': '升级中止',
  'admin.stackUpgrade.state.completed': '升级完成',
  'admin.stackUpgrade.state.inProgress.downgrade': '正在降级',
  'admin.stackUpgrade.state.paused.downgrade': '降级暂停',
  'admin.stackUpgrade.state.aborted.downgrade': '降级中止',
  'admin.stackUpgrade.state.completed.downgrade': '降级完成',
  'admin.stackUpgrade.dialog.header': '{0} 到 {1}',
  'admin.stackUpgrade.dialog.downgrade.header': '降级到 {0}',
  'admin.stackUpgrade.dialog.operationFailed': '操作失败.',
  'admin.stackUpgrade.dialog.stop': '停止升级',
  'admin.stackUpgrade.dialog.continue': '忽略并继续',
  'admin.stackUpgrade.dialog.cancel': '取消升级',
  'admin.stackUpgrade.dialog.inProgress': '现在运行:',
  'admin.stackUpgrade.dialog.keepRunning': '保持运行在后台升级',
  'admin.stackUpgrade.dialog.failed': '失败:',
  'admin.stackUpgrade.dialog.manual.slaveComponentFailures.title': '从属组件故障',
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.title': '服务检查失败',
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.msg1': '以下服务检查失败但已被跳过:',
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.msg2':
    '您可以选择暂停升级并修复上述问题,然后再继续.',
  'admin.stackUpgrade.dialog.manual': '需要手动步骤',
  'admin.stackUpgrade.dialog.manualDone': '我已经执行了上述手动步骤.',
  'admin.stackUpgrade.dialog.closeProgress':
    '升级正在进行中. \n 如果您关闭此窗口,则升级将在后台运行.',
  'admin.stackUpgrade.dialog.closePause': '升级已暂停. \n 如果您关闭此窗口,则可以稍后重新启动升级.',
  'admin.stackUpgrade.dialog.aborted': '升级已中止. \n 您可以降级或重试升级.',
  'admin.stackUpgrade.dialog.downgrade.aborted': '降级被中止. \n 你可以重试降级.',
  'admin.stackUpgrade.dialog.suspended': '升级已暂停',
  'admin.stackUpgrade.dialog.suspended.downgrade': '降级已暂停',
  'admin.stackUpgrade.dialog.resume': '恢复升级',
  'admin.stackUpgrade.dialog.resume.downgrade': '恢复降级',
  'admin.stackUpgrade.dialog.details.open': '显示细节',
  'admin.stackUpgrade.dialog.details.hide': '隐藏细节',
  'admin.stackUpgrade.dialog.notActive': '等待执行下一个任务...',
  'admin.stackUpgrade.dialog.prepareUpgrade.header': '准备升级...',
  'services.service.start': '开始',
  'services.service.stop': '停止',
  'services.service.metrics': '指标',
  'services.nothingToAdd': '没有添加',
  'services.service.summary.version': '版本',
  'services.service.summary.viewHost': '查看主机',
  'services.service.summary.viewHosts': '查看主机',
  'services.service.summary.clientOnlyService.ToolTip': '仅客户端服务',
  'services.service.summary.JournalNodesLive': 'JournalNodes活跃数量',
  'services.service.summary.mapreduce2.client': 'MapReduce2客户端',
  'services.service.summary.mapreduce2.clients': 'MapReduce2客户端',
  'services.service.summary.nodeManagersLive': 'NodeManagers活跃数量',
  'services.service.summary.TrackersLive': 'Trackers活跃数量',
  'services.service.summary.RegionServersLIVE': 'RegionServers活跃数量',
  'services.service.summary.PhoenixServersLIVE': 'Phoenix查询服务器活跃数量',
  'services.service.summary.GangliaMonitorsLIVE': 'Ganglia监视活跃数量',
  'services.service.summary.SupervisorsLIVE': 'Supervisors活跃数量',
  'services.service.summary.nameNode': 'NameNode浏览界面',
  'services.service.summary.nameNodeUptime': 'NameNode正常运行时间',
  'services.service.summary.nameNodeHeap': 'NameNode堆',
  'services.service.summary.nameNode.active': '活动的NameNode',
  'services.service.summary.nameNode.standby': '待机的NameNode',
  'services.service.summary.pendingUpgradeStatus': '升级状态',
  'services.service.summary.pendingUpgradeStatus.notFinalized': '升级尚未完成',
  'services.service.summary.pendingUpgradeStatus.notPending': '没有等待升级',
  'services.service.summary.safeModeStatus': '安全模式状态',
  'services.service.summary.safeModeStatus.inSafeMode': '在安全模式',
  'services.service.summary.safeModeStatus.notInSafeMode': '不在安全模式',
  'services.service.summary.dataNodes': '数据节点',
  'services.service.summary.diskCapacity': 'HDFS磁盘容量',
  'services.service.summary.blocksTotal': '块(合计)',
  'services.service.summary.blockErrors': '块错误',
  'services.service.summary.totalFiles': '总文件+目录',
  'services.service.summary.jobTracker': 'JobTracker',
  'services.service.summary.jobTrackerWebUI': 'JobTracker浏览界面',
  'services.service.summary.jobTrackerUptime': 'JobTracker正常运行时间',
  'services.service.summary.trackersLiveTotal': '跟踪器',
  'services.service.summary.trackersBlacklistGraylist': '跟踪器',
  'services.service.summary.jobTrackerHeap': 'JobTracker堆',
  'services.service.summary.totalSlotsCapacity': '总槽容量',
  'services.service.summary.totalJobs': '总工作量',
  'services.service.summary.currentSlotUtiliMaps': 'Map槽容量',
  'services.service.summary.currentSlotUtiliReduces': 'Reduce槽容量',
  'services.service.summary.tasksMaps': '任务: Maps',
  'services.service.summary.tasksReduces': '任务: Reduces',
  'services.service.summary.hbaseMaster': 'HBase管理者界面',
  'services.service.summary.regionServerCount': 'RegionServer总数',
  'services.service.summary.regionInTransition': '转型地区',
  'services.service.summary.masterStarted': '开始的Master',
  'services.service.summary.masterActivated': '激活的Master',
  'services.service.summary.averageLoad': '平均负载',
  'services.service.summary.masterHeap': '主堆',
  'services.service.summary.moreStats': '更多统计资料',
  'services.service.summary.clientCount': '{0} 客户端主机',
  'services.service.summary.historyServer': '历史服务器浏览界面',
  'services.service.summary.hiveserver2.jdbc.url.text': ' JDBC URL',
  'services.service.summary.hiveserver2.endpoint.tooltip.text': 'JDBC 连接字符串 {0}',
  'services.service.summary.hiveserver2.endpoint.value':
    'jdbc:hive2://{0}/;serviceDiscoveryMode=zooKeeper;zooKeeperNamespace={1}',
  'services.service.actions.downloadClientConfigs': '下载客户端配置',
  'services.service.actions.downloadClientConfigs.fail.noConfigFile': '没有为组件定义配置文件',
  'services.service.actions.downloadClientConfigs.fail.popup.header': '{0} 配置',
  'services.service.actions.downloadClientConfigs.fail.popup.body.noErrorMessage':
    '{0}配置文件的生成失败. ',
  'services.service.actions.downloadClientConfigs.fail.popup.body.errorMessage':
    '{0}配置文件的生成失败,{1}错误: <br/> <pre><span class ="text-error">{2}</span> </pre>',
  'services.service.actions.downloadClientConfigs.fail.popup.body.question': '你想再试一次吗?',
  'services.service.actions.deleteService': '删除服务',
  'services.service.actions.run.rebalancer': '运行再平衡',
  'services.service.actions.run.rebalanceHdfsNodes': '重新平衡HDFS',
  'services.service.actions.run.rebalanceHdfsNodes.title': 'HDFS重新平衡',
  'services.service.actions.run.rebalanceHdfsNodes.prompt': '平衡器阈值(磁盘容量的百分比):',
  'services.service.actions.run.rebalanceHdfsNodes.promptTooltip':
    '磁盘容量的百分比.这将覆盖默认阈值',
  'services.service.actions.run.rebalanceHdfsNodes.promptError': '值应该在1到100之间',
  'services.service.actions.run.rebalanceHdfsNodes.context': '重新平衡HDFS',
  'services.service.actions.run.rebalanceHdfsNodes.error': '远程命令时出错: ',
  'services.service.actions.run.yarnRefreshQueues.title': '刷新队列ResourceManager',
  'services.service.actions.run.yarnRefreshQueues.menu': '刷新YARN容量调度程序',
  'services.service.actions.run.yarnRefreshQueues.context': '刷新YARN容量调度程序',
  'services.service.actions.run.yarnRefreshQueues.error': '远程命令时出错: ',
  'services.service.actions.run.executeCustomCommand.menu': '{0}',
  'services.service.actions.run.executeCustomCommand.context': '执行 {0}',
  'services.service.actions.run.executeCustomCommand.error': '远程命令时出错: ',
  'services.service.actions.run.compaction': '运行压实',
  'services.service.actions.run.smoke': '运行服务检查',
  'services.service.actions.reassign.master': '移动 {0}',
  'services.service.actions.reassign.master.hive': '移动HiveServer2,WebHCat服务器,MySQL服务器',
  'services.service.actions.manage_configuration_groups': '管理配置组...',
  'services.service.actions.run.startLdapKnox.title': '开始演示LDAP Knox网关',
  'services.service.actions.run.startLdapKnox.context': '开始演示LDAP',
  'services.service.actions.run.stopLdapKnox.title': '停止演示LDAP Knox网关',
  'services.service.actions.run.stopLdapKnox.context': '停止演示LDAP',
  'services.service.actions.run.startStopLdapKnox.error': '远程命令时出错: ',

  // Hive Server Interactive custom command to restart LLAP
  'services.service.actions.run.restartLLAP': '重启LLAP',
  'services.service.actions.run.immediateStopHawqService.context': '停止HAWQ服务 (立即模式)',
  'services.service.actions.run.immediateStopHawqService.label': '停止HAWQ服务 (立即模式)',
  'services.service.actions.run.immediateStopHawqSegment.label': '停止 (立即模式)',
  'services.service.actions.run.immediateStopHawqSegment.context': '停止HAWQ细分 (立即模式)',
  'services.service.actions.run.resyncHawqStandby.context': '重新同步HAWQ备用主机',
  'services.service.actions.run.resyncHawqStandby.label': '重新同步HAWQ备用主机',
  'services.service.actions.run.clearHawqCache.label': '清除HAWQ的HDFS元数据缓存',
  'services.service.actions.run.runHawqCheck.label': '运行HAWQ配置检查',
  'services.service.actions.manage_configuration_groups.short': '管理配置组',
  'services.service.actions.serviceActions': '服务行动',
  'services.service.actions.hsi.alertPopup.header': '无法启用交互式查询',
  'services.service.actions.hsi.alertPopup.body':
    '由于Interactive Query处于禁用状态，因此无法立即启用Interactive Query. 这可能需要几分钟的时间. 稍后再试.',

  'services.service.delete.popup.header': '删除服务',
  'services.service.delete.popup.kerberos':
    'Kerberos服务<i>无法删除</ i>，因为Kerberos是' +
    '当前已启用,并被群集使用.Kerberos服务只能通过禁用Kerberos' +
    '来删除,可以通过浏览到<b>管理 > Kerberos</b>并选择<b>禁用 Kerberos</b>来找到.',
  'services.service.delete.popup.ranger': '在删除<b> Ranger </b>之前,您必须禁用插件.',
  'services.service.delete.configVersionNote': '删除{0}后更新配置',
  'services.service.delete.configVersionNote.plural': '删除{0}后更新配置',
  'services.service.delete.lastService.popup.body':
    '<b> {0} </ b>服务不能被删除,至少必须安装一个服务.',
  'services.service.delete.popup.dependentServices': '删除<b> {0} </b>之前,您必须删除以下依赖服务:',
  'services.service.delete.popup.mustBeStopped':
    '删除<b> {0} </b>之前,您必须停止服务和每个从属和主组件.',
  'services.service.delete.popup.mustBeStopped.dependent': ' 随着依赖服务<b>{0}</b>.',
  'services.service.delete.popup.warning':
    '<b> {0}服务将从Ambari和所有配置' + '中删除和配置历史将丢失.</b>',
  'services.service.delete.popup.warning.dependent': '<b> 注意: 依赖的{0}服务也将被删除.</b>',
  'services.service.confirmDelete.popup.header': '确认删除',
  'services.service.confirmDelete.popup.body':
    '您必须在确认框中输入"{1}"来确认删除<b>{0}</b>. <b>此操作不可逆,所有配置历史记录将丢失.</ b></b>',
  'services.service.confirmDelete.popup.body.type': '键入"{0}"进行确认',
  'services.service.confirmDelete.popup.body.dependent':
    '您必须在确认框中输入"{2}"，确认删除<b> {0} </b>和<b> {1} </b>. <b>此操作不可逆,所有配置历史记录都将丢失.</ b>',
  'services.service.delete.progressPopup.message': '正在删除 {0}...',
  'services.service.delete.service.success.confirmation': '服务{0}已成功删除',
  'services.service.delete.service.success.confirmation.plural': '服务{0}已成功删除',
  'services.service.delete.popup.warning.ranger_kms':
    '<b>如果服务管理加密区(EZ)和密钥,则不应删除Ranger KMS.否则EZ中的数据将无法访问.</b>',

  'services.service.summary.unknown': '未知',
  'services.service.summary.notRunning': '不运行',
  'services.service.summary.notAvailable': 'n/a',
  'services.service.summary.diskInfoBar.used': '用过的',
  'services.service.summary.storm.freeslots': '免费插槽',
  'services.service.summary.storm.executors': '执行者',
  'services.service.summary.storm.tasks': '任务',
  'services.service.summary.storm.nimbus.uptime': 'Nimbus正常运行时间',
  'services.service.summary.storm.topologies': '拓扑结构',
  'services.service.summary.flume.startAgent': '启动代理',
  'services.service.summary.flume.stopAgent': '停止代理',
  'services.service.summary.flume.stop.context': '停止Flume {0}',
  'services.service.summary.flume.start.context': '启动Flume {0}',
  'services.service.summary.flume.noAgents': '没有Flume去显示',

  'services.service.summary.ranger.plugin.title': 'Ranger {0} 组件',
  'services.service.summary.ranger.plugin.loadingStatus': '加载状态...',

  'services.service.summary.alerts.noAlerts': '没有警告',
  'services.service.summary.alerts.alertsExist': '{0} 警告',
  'services.service.summary.alerts.popup.header': '{0}的警告',

  'services.service.info.metrics.ambariMetrics.master.averageLoad': '平均负载',
  'services.service.info.metrics.ambariMetrics.master.displayNames.averageLoad': '平均负载',
  'services.service.info.metrics.ambariMetrics.regionServer.storeFiles': 'StoreFiles数量',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.storeFilesCount':
    'StoreFiles数量',
  'services.service.info.metrics.ambariMetrics.regionServer.regions': '地区数量',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.regionsCount': '地区数量',
  'services.service.info.metrics.ambariMetrics.regionServer.requests': '总请求数量',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.requestCount':
    '总请求数量',
  'services.service.info.metrics.ambariMetrics.regionServer.blockCacheHitPercent':
    '阻止缓存命中百分比',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.blockCacheHitPercent':
    '阻止缓存命中百分比',
  'services.service.info.metrics.ambariMetrics.regionServer.compactionQueueSize': '压缩队列大小',
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.compactionQueueSize':
    '压缩队列大小',

  'services.service.info.metrics.flume.channelFillPercent': '通道填充百分比',
  'services.service.info.metrics.flume.channelSize': '通道大小',
  'services.service.info.metrics.flume.sinkDrainSuccess': '水槽排水计数',
  'services.service.info.metrics.flume.sourceAccepted': '源事件接受计数',
  'services.service.info.metrics.flume.sinkConnectionFailed': '水槽连接失败计数',
  'services.service.info.metrics.flume.channelSizeMMA': '通道大小事件',
  'services.service.info.metrics.flume.channelSizeSum': '通道大小事件总和',
  'services.service.info.metrics.flume.incoming.mma': '入场事件率',
  'services.service.info.metrics.flume.incoming.sum': '入场事件总和',
  'services.service.info.metrics.flume.outgoing.mma': '外发事件率',
  'services.service.info.metrics.flume.outgoing.sum': '外发事件总和',
  'services.service.info.metrics.flume.gc': '垃圾收集时间',
  'services.service.info.metrics.flume.cpu.user': 'CPU (用户)',
  'services.service.info.metrics.flume.gc': '垃圾收集时间',
  'services.service.info.metrics.flume.cpu.user': 'CPU (用户)',
  'services.service.info.metrics.flume.jvmThreadsRunnable': 'JVM可运行线程',
  'services.service.info.metrics.flume.jvmHeapUsed': 'JVM堆内存使用',
  'services.service.info.metrics.flume.channelType': '通道尺寸 {0}',
  'services.service.info.metrics.flume.incoming_mma': '传入的 {0}',
  'services.service.info.metrics.flume.outgoing_mma': '即将离任的 {0}',
  'services.service.info.metrics.flume.sourceName': '源 {0}',
  'services.service.info.metrics.flume.hostName': '主机: {0}',
  'services.service.info.metrics.flume.channelName': '通道 {0}',
  'services.service.info.metrics.flume.sinkName': '水槽 {0}',

  'services.service.info.metrics.hbase.clusterRequests': '集群请求',
  'services.service.info.metrics.hbase.clusterRequests.displayNames.requestCount': '请求数',
  'services.service.info.metrics.hbase.hlogSplitSize': 'HLog分割大小',
  'services.service.info.metrics.hbase.hlogSplitSize.displayNames.splitSize': '分割大小',
  'services.service.info.metrics.hbase.hlogSplitTime': 'HLog分离的时间',
  'services.service.info.metrics.hbase.hlogSplitTime.displayNames.splitTime': '分离的时间',
  'services.service.info.metrics.hbase.regionServerQueueSize': 'RegionServer队列大小',
  'services.service.info.metrics.hbase.regionServerQueueSize.displayNames.compactionQueueSize':
    '压实队列大小',
  'services.service.info.metrics.hbase.regionServerQueueSize.displayNames.flushQueueSize':
    '冲洗队列大小',
  'services.service.info.metrics.hbase.regionServerRegions': 'RegionServer区域',
  'services.service.info.metrics.hbase.regionServerRegions.displayNames.regions': '区域',
  'services.service.info.metrics.hbase.regionServerRequests': '累积请求',
  'services.service.info.metrics.hbase.regionServerRequests.2': 'RegionServer请求',
  'services.service.info.metrics.hbase.regionServerRequests.displayNames.writeRequests': '写请求',
  'services.service.info.metrics.hbase.regionServerRequests.displayNames.readRequests': '读请求',

  'services.service.info.metrics.hdfs.blockStatus': '阻止状态',
  'services.service.info.metrics.hdfs.blockStatus.displayNames.pendingReplicationBlocks':
    '挂起的复制块',
  'services.service.info.metrics.hdfs.blockStatus.displayNames.underReplicatedBlocks': '在复制块下',
  'services.service.info.metrics.hdfs.fileOperations': '文件操作',
  'services.service.info.metrics.hdfs.fileOperations.displayNames.fileInformationOperations':
    '文件信息操作',
  'services.service.info.metrics.hdfs.fileOperations.displayNames.deleteFileOperations':
    '删除文件操作',
  'services.service.info.metrics.hdfs.fileOperations.displayNames.createFileOperations':
    '创建文件操作',
  'services.service.info.metrics.hdfs.gc': '垃圾收集',
  'services.service.info.metrics.hdfs.gc.displayNames.gcTimeMillis': '时间',
  'services.service.info.metrics.hdfs.io': 'HDFS I/O',
  'services.service.info.metrics.hdfs.io.displayNames.bytesWritten': '字节写',
  'services.service.info.metrics.hdfs.io.displayNames.bytesRead': '字解读',
  'services.service.info.metrics.hdfs.jvmHeap': 'JVM内存状态',
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memHeapCommittedM': '堆内存提交',
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memNonHeapUsedM': '使用非堆存储器',
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memHeapUsedM': '堆使用的内存',
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memNonHeapCommittedM': '提交非堆存储器',
  'services.service.info.metrics.hdfs.jvmThreads': 'JVM线程状态',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsBlocked': '线程阻塞',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsWaiting': '线程等待',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsTimedWaiting': '线程定时等待',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsRunnable': '线程可运行',
  'services.service.info.metrics.hdfs.rpc': 'RPC',
  'services.service.info.metrics.hdfs.rpc.displayNames.rpcQueueTimeAvgTime': '队列平均等待时间',
  'services.service.info.metrics.hdfs.spaceUtilization': '空间利用总量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityRemainingGB':
    '剩余总量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityUsedGB': '使用容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityTotalGB': '容量合计',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityRemaining': '剩余容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityUsed': '使用容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityTotal': '容量合计',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityNonDFSUsed':
    '使用非DFS容量',

  'services.service.info.metrics.yarn.jvmHeap': 'JVM内存状态',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memHeapCommittedM': '堆内存提交',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memNonHeapUsedM': '使用非堆存储器',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memHeapUsedM': '堆使用的内存',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memNonHeapCommittedM': '提交非堆存储器',
  'services.service.info.metrics.yarn.jvmThreads': 'JVM线程状态',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsBlocked': '线程阻塞',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsWaiting': '线程等待',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsTimedWaiting': '线程定时等待',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsRunnable': '线程可运行',
  'services.service.info.metrics.yarn.rpc': 'RPC',
  'services.service.info.metrics.yarn.rpc.displayNames.RpcQueueTimeAvgTime': '队列平均等待时间',
  'services.service.info.metrics.yarn.gc': '垃圾收集',
  'services.service.info.metrics.yarn.gc.displayNames.gcTimeMillis': '时间',
  'services.service.info.metrics.yarn.allocated.memory': '集群内存',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.allocated': '分配',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.available': '可用',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.pending': '待定',
  'services.service.info.metrics.yarn.allocated.container': '容器',
  'services.service.info.metrics.yarn.allocated.container.displayNames.allocated': '分配',
  'services.service.info.metrics.yarn.allocated.container.displayNames.reserved': '保留',
  'services.service.info.metrics.yarn.allocated.container.displayNames.pending': '待定',
  'services.service.info.metrics.yarn.nodemanager.statuses': 'NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.active': '活动NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.decommissioned':
    '退役NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.lost': '遗失的NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.rebooted':
    '重启的NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.unhealthy':
    '不健康的NodeManagers',
  'services.service.info.metrics.yarn.queueMemoryResource': '队列使用的内存',
  'services.service.info.metrics.yarn.queueMemoryResource.displayNames.allocated': '分配 ({0})',
  'services.service.info.metrics.yarn.queueMemoryResource.displayNames.available': '可用 ({0})',
  'services.service.info.metrics.yarn.queueMemoryResource.displayName': '队列: {0}',
  'services.service.info.metrics.yarn.apps.states.current.title': '当前应用',
  'services.service.info.metrics.yarn.apps.states.finished.title': '已完成的应用',
  'services.service.info.metrics.yarn.apps.states.completed': '已完成',
  'services.service.info.metrics.yarn.apps.states.failed': '失败了',
  'services.service.info.metrics.yarn.apps.states.killed': '杀死了',
  'services.service.info.metrics.yarn.apps.states.pending': '待定',
  'services.service.info.metrics.yarn.apps.states.running': '正在运行的',
  'services.service.info.metrics.yarn.apps.states.submitted': '提交',

  'services.service.info.menu.summary': '摘要',
  'services.service.info.menu.configs': '配置',
  'services.service.info.menu.heatmaps': '热图',
  'services.service.info.summary.hostsRunningMonitor': '{0}/{1}',
  'services.service.info.summary.serversHostCount': '{0} 更多',

  'services.service.config.nothing.to.display': '没有显示属性.',
  'services.service.config.final': '最后',
  'services.service.config.password.additionalDescription':
    '出于安全考虑，密码更改将不会在配置版本比较中显示',
  'services.service.config.secure.additionalDescription':
    '此配置可以由特权用户的"管理员"选项卡下的Kerberos页面进行更改.',
  'services.service.config.saved': '保存更改的配置',
  'services.service.config.notSaved': '不保存更改的配置',
  'services.service.config.restartService.TooltipMessage':
    '<b>重启服务</b><br>{1}主机上的{0}组件使用的陈旧配置：{2}',
  'services.service.config.restartService.needToRestart': '<strong>重新启动必需:</strong> ',
  'services.service.config.restartService.needToRestartEnd': '应该重新启动',
  'service.service.config.restartService.shouldBeRestarted': '{0} 需要重新启动',
  'services.service.config.saved.message': '保存更改配置成功.',
  'services.service.config.saving.message': '正在保存更改配置...',
  'services.service.config.msgServiceStop':
    '无法保存配置更改. 请先停止服务. 在所有组件停止后，您将能够保存配置更改.',
  'services.service.config.failCreateConfig': '创建服务配置失败',
  'services.service.config.failSaveConfig': '保存服务配置失败',
  'services.service.config.failSaveConfigHostOverrides': '保存服务配置覆盖失败',
  'services.service.config.addPropertyWindow.error.required': '这是必需的',
  'services.service.config.addPropertyWindow.error.derivedKey': '此属性已定义',
  'services.service.config.addPropertyWindow.error.derivedKey.location':
    '此属性已在其他配置文件中定义 {0}',
  'services.service.config.addPropertyWindow.error.derivedKey.infile': '此属性已在此配置文件中定义',
  'services.service.config.addPropertyWindow.error.derivedKey.specific':
    '属性 "{0}" 已经被定义在此配置文件中了',
  'services.service.config.addPropertyWindow.error.format': 'Key 和 value 应该用 "=" 分开',
  'services.service.config.addPropertyWindow.error.lineNumber': '行 {0}: ',
  'services.service.config.addPropertyWindow.filterKeyLink': '查找属性',
  'services.service.config.addPropertyWindow.properties': '属性',
  'services.service.config.addPropertyWindow.propertiesHelper': 'key=value (每行)',
  'services.service.config.addPropertyWindow.propertiesPlaceholder': '回车 key=value (每行)',
  'services.service.config.addPropertyWindow.bulkMode': '批量属性添加模式',
  'services.service.config.addPropertyWindow.singleMode': '单一属性添加模式',
  'services.service.config.stopService.runningHostComponents': '{1}主机上的{0}组件正在运行',
  'services.service.config.stopService.unknownHostComponents':
    '{1}主机上的{0}组件处于未知状态. 这些组件可能实际上正在运行，需要稍后重新启动才能使更改生效.',
  'services.service.config.confirmDirectoryChange':
    '您即将对{0}核心的服务目录进行更改. 在继续之前，绝对确定这些含义，并且您已经采取必要的手动步骤（如果有的话）进行更改. 你确定要继续吗？',
  'services.service.config.configOverride.head': '覆盖配置',
  'services.service.config.configOverride.body': '不能覆盖已经保存的配置',
  'services.service.config.exitPopup.body': '您有未保存的更改. 保存更改或丢弃？',
  'services.service.config.exitChangesPopup.body':
    '您将被带回到"分配从属和客户端"步骤，并将丢失所有当前的自定义. 你确定？',
  'services.service.config.propertyFilterPopover.title': '属性过滤器',
  'services.service.config.propertyFilterPopover.content':
    '输入关键字以按属性名称，值或描述过滤属性.',
  'services.service.config.hive.oozie.postgresql': '现有的PostgreSQL数据库',
  'services.service.config.database.connection.success': '连接成功',
  'services.service.config.database.connection.inProgress': '检查连接',
  'services.service.config.database.connection.failed': '连接失败',
  'services.service.config.connection.logsPopup.header': '{0} 连接: {1}',
  'services.service.config.connection.exitPopup.msg':
    '测试连接正在进行中. 建议等到它完成. 确定要退出启用Kerberos向导吗？',
  'services.service.config.database.btn.idle': '测试连接',
  'services.service.config.kdc.btn.idle': '测试KDC连接',
  'services.service.config.database.btn.connecting': '连接中...',
  'services.service.config.database.msg.jdbcSetup':
    '确保你已经运行了:<br/>' +
    '<b>ambari-server setup --jdbc-db={0} --jdbc-driver=/path/to/{0}/{1}</b> ' +
    '在Ambari Server主机上使JDBC驱动程序可用，并启用测试数据库连接.',
  'services.service.config.configHistory.configGroup': '配置组',
  'services.service.config.configHistory.rightArrow.tooltip': '显示更早的版本',
  'services.service.config.configHistory.leftArrow.tooltip': '显示更新的版本',
  'services.service.config.configHistory.dismissIcon.tooltip': '解雇',
  'services.service.config.configHistory.makeCurrent.message': '从服务配置版本创建 {0}',
  'services.service.config.configHistory.comparing': '比较',
  'services.service.config.setRecommendedValue': '设置推荐',

  'services.service.widgets.list-widget.nothingSelected': '没有选择',

  'services.add.header': '添加服务向导',
  'services.add.warning':
    '关闭此对话框将继续在后台安装所选服务，但是需要手动启动已安装的服务. 你确定你要退出吗?',
  'services.reassign.header': '移动Master向导',
  'services.service.add': '添加服务',
  'services.service.startAll': '全部开始',
  'services.service.stopAll': '全部停止',
  'services.service.restartAllRequired': '重新启动所有必需的服务',
  'services.service.downloadAllClientConfigs': '下载所有客户端配置',
  'services.service.startAll.confirmMsg': '您即将开始所有服务',
  'services.service.stopAll.confirmMsg': '您即将停止所有服务',
  'services.service.refreshAll.confirmMsg':
    '<p>您即将重启 {0}</p>' +
    '<div class="alert alert-warning">这将在服务重新启动时触发警报. 要禁止警报，请在运行"重新启动所有必需"之前打开上面列出的服务的维护模式</div>',
  'services.service.start.confirmMsg': '您即将开始 {0}',
  'services.service.stop.confirmMsg': '您即将停止 {0}',
  'services.service.stop.confirmButton': '确认停止',
  'services.service.start.confirmButton': '确认开始',
  'services.service.stop.warningMsg.turnOnMM':
    '这将在服务停止时生成警报. 要抑制警报，请在停止之前打开{0}的维护模式.',
  'services.service.stop.warningMsg.dependent.services': '停止{0}可能会损害其依赖服务的功能：{1}.',
  'services.service.restartAll.confirmButton': '确认重启所有',
  'services.service.restartAll.confirmMsg': '您即将重启 {0}',
  'services.service.restartAll.warningMsg.turnOnMM':
    '这将在服务重新启动时触发警报. 要抑制警报，请在运行重新启动之前启用{0}的维护模式',
  'services.service.stop.HDFS.warningMsg.checkPointNA':
    '无法确定最后一个HDFS检查点的启动时间. 请确保您有最近的检查点. 否则，NameNode可能需要很长时间才能启动.',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld.instructions':
    '<br><ol>' +
    '<li>登录到NameNode主机 <b>{0}</b>.</li>' +
    '<li>将NameNode放在安全模式（只读模式）:' +
    '<div class="code-snippet">sudo su {1} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
    '<li>Once in Safe Mode, create a Checkpoint:' +
    '<div class="code-snippet">sudo su {1} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
    '</ol>',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld':
    '最后一个HDFS检查点的时间早于{0}小时. 在继续操作之前，请确保已经使用了检查点. 否则，NameNode可能需要很长时间才能启动.',
  'services.service.config_groups_popup.header': '管理{0}配置组',
  'services.service.config_groups_popup.notice':
    '您可以通过管理{{serviceName}}配置组及其主机成员身份来将不同的{{serviceName}}配置套用到主机组. 属于{{serviceName}}配置组的主机具有与{{serviceName}}相同的一组配置. 每个主机属于一个{{serviceName}}配置组.',
  'services.service.config_groups_popup.rename': '重命名',
  'services.service.config_groups_popup.duplicate': '重复',
  'services.service.config_groups_popup.group_name_lable': '名字',
  'services.service.config_groups_popup.group_desc_lable': '描述',
  'services.service.config_groups_popup.properties': '属性',
  'services.service.config_groups_popup.addButton': '创建新的配置组',
  'services.service.config_groups_popup.removeButton': '删除配置组',
  'services.service.config_groups_popup.renameButton': '重命名配置组',
  'services.service.config_groups_popup.addHost': '建筑及添加到选定的配置组',
  'services.service.config_groups_popup.addHostDisabled': '没有可用的主机添加.',
  'services.service.config_groups_popup.removeHost': '从选定的配置组移除主机',
  'services.service.config_groups_popup.duplicateButton': '重复的配置组',
  'services.service.config_groups.add_config_group_popup.header': '创建新的配置组',
  'services.service.config_groups.duplicate_config_group_popup.header': '重复的配置组',
  'services.service.config_groups.rename_config_group_popup.header': '重命名配置组',
  'services.service.config_groups.switchGroupTextFull': '切换到"{0}"主机配置组',
  'services.service.config_groups.switchGroupTextShort': '切换到"{0}"',
  'services.reassign.closePopup':
    '移动{0}向导正在进行中. 您必须允许向导完成Ambari处于可用状态. 如果您选择退出，您必须按照"Ambari用户指南"中的说明手动完成或还原移动{0}向导. 你确定要退出向导吗？',
  'services.reassign.error.fewHosts': '您的群集中至少必须有2个主机才能运行"移动向导".',

  'services.reassign.step1.header': '开始使用',
  'services.reassign.step1.message1': '这个向导会引导你移动 {0}.<br/>',
  'services.reassign.step1.message2':
    '重新分配{0}的过程涉及到 <b>自动化步骤</b> (这将由向导处理) 和 ' +
    '<b>手动步骤</b> (您必须按照向导的指示顺序执行).<br/><br/>',
  'services.reassign.step1.message3':
    '<br/><b>所有必需的服务将作为向导的一部分重新启动. 您应该计划一个群集维护窗口并进行准备' +
    '用于移动{0}时的集群停机 .</b>',

  'services.reassign.step2.header': '分配主组件',
  'services.reassign.step2.currentHost': '当前:',
  'services.reassign.step2.body': '分配 {0} 给新的主机.',
  'services.reassign.step2.body.namenodeHA': '将{0}移动到新主机. 一次只能移动一个主组件',
  'services.reassign.step3.header': '检查',
  'services.reassign.step3.body': '<b>确认您的主机选择.</b>',
  'services.reassign.step3.targetHost': '目标主机:',
  'services.reassign.step3.sourceHost': '源主机:',
  'services.reassign.step3.component': '组件名字:',
  'services.reassign.step3.configs':
    '<div class="alert alert-info">' +
    '<p><b>查看配置更改.</ b> </ p>向导将进行以下配置更改.</div>',
  'services.reassign.step4.header': '配置组件',

  'services.reassign.step4.tasks.stopRequiredServices.title': '停止所需的服务',
  'services.reassign.step4.tasks.createHostComponents.title': '创建 {0}',
  'services.reassign.step4.tasks.putHostComponentsInMaintenanceMode.title': '禁用 {0}',
  'services.reassign.step4.tasks.reconfigure.title': '重新配置 {0}',
  'services.reassign.step4.tasks.save.configuration.note': '此配置由Move {0}向导创建',
  'services.reassign.step4.tasks.installHostComponents.title': '安装 {0}',
  'services.reassign.step4.tasks.startZooKeeperServers.title': '启动ZooKeeper服务器',
  'services.reassign.step4.tasks.startNameNode.title': '启动NameNode',
  'services.reassign.step4.tasks.stopHostComponentsInMaintenanceMode.title': '停止 {0}',
  'services.reassign.step4.tasks.deleteHostComponents.title': '删除禁用的 {0}',
  'services.reassign.step4.tasks.startRequiredServices.title': '启动必需的服务',
  'services.reassign.step4.tasks.cleanMySqlServer.title': '清理MYSQL服务器',
  'services.reassign.step4.tasks.testHiveMysqlConnection.title': '测试 MYSQL 连接',
  'services.reassign.step4.tasks.configureMySqlServer.title': '配置MYSQL服务器',
  'services.reassign.step4.tasks.startMySqlServer.title': '启动MYSQL服务器',
  'services.reassign.step4.tasks.restartMySqlServer.title': '重启MYSQL服务器',
  'services.reassign.step4.tasks.startServices.title': '启动服务',
  'services.reassign.step4.tasks.testDBConnection.title': '测试DB连接',
  'services.reassign.step4.tasks.testDBConnection.tooltip':
    'Database Host: {0}\n' +
    'Database Type: {1}\n' +
    'Database Name: {2}\n' +
    'Username: {3}\n' +
    'Password: {4}\n' +
    'JDBC Driver Class: {5}\n' +
    'Database URL: {6}',
  'services.reassign.rollback.confirm': 'Are you sure?',

  'services.reassign.step4.task0.title': '停止必需的服务',
  'services.reassign.step4.task1.title': '创建 {0}',
  'services.reassign.step4.task2.title': '禁用 {0}',
  'services.reassign.step4.task3.title': '重新配置 {0}',
  'services.reassign.step4.save.configuration.note': '此配置由移动 {0}向导创建',
  'services.reassign.step4.task4.title': '安装 {0}',
  'services.reassign.step4.task5.title': '启动 ZooKeeper 服务器',
  'services.reassign.step4.task6.title': '启动 NameNode',
  'services.reassign.step4.task7.title': '删除禁用的 {0}',
  'services.reassign.step4.task8.title': '启动必需的服务',
  'services.reassign.step4.tasks.startNewMySqlServer.title': '创建新的 MYSQL 服务器',
  'services.reassign.step4.status.success':
    '成功移动 <b>{0}</b> 从 <b>{1}</b> 主机到 <b>{2}</b> 主机',
  'services.reassign.step4.status.success.withManualSteps': '继续下一步',
  'services.reassign.step4.status.failed':
    '移动失败 <b>{0}</b> 从 <b>{1}</b> 主机到 <b>{2}</b> 主机',
  'services.reassign.step4.status.info': '重新分配 {0}. \n请等待所有任务完成.',
  'services.reassign.step4.retry': '您可以单击重试或中止按钮重试失败的任务或中止更改',
  'services.reassign.step4.abortError': '中止变更时出错.',
  'services.reassign.step5.header': '手动命令',
  'services.reassign.step5.body.namenode':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>将源主机{1}上的{0}的内容复制到目标主机{2}上的{0}.</li>' +
    '<li>登录目标主机 <b>{2}</b> 并且改变运行在NameNode下的目录权限:' +
    '<div class="code-snippet">chown -R {3}:{5} {6}</div></li>' +
    '<li>通过运行创建标记目录:' +
    '<div class="code-snippet">mkdir -p /var/lib/hdfs/namenode/formatted</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.namenode_ha':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>登录 NameNode 主机 <b>{4}</b>.</li>' +
    '<li>通过运行在ZooKeeper中的故障信息自动切换重置' +
    '<div class="code-snippet">sudo su {3} -l -c \'hdfs zkfc -formatZK\'</div></li>' +
    '</ol>' +
    '</div>' +
    '<div class="alert alert-info">' +
    '<ol start="3">' +
    '<li>登录到新安装的NameNode主机 <b>{2}</b>.<br>' +
    '<div class="alert alert-warning"><strong>Important!</strong> 确保登录到新安装的NameNode主机.<br>这是与上述步骤1和2不同的主机.</div>' +
    '</li>' +
    '<li>通过运行初始化原数据:' +
    "<div class='code-snippet'>sudo su {3} -l -c 'hdfs namenode -bootstrapStandby'</div></li>" +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.secondary_namenode':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>复制内容 <b>{0}</b> 在源主机上 <b>{1}</b> to <b>{0}</b> 在目标主机上 <b>{2}</b>.</li>' +
    '<li>登录到目标主机 <b>{2}</b> 并通过运行来更改SNameNode dirs的权限:' +
    '<div class="code-snippet">chown -R {3}:{5} {6}</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.oozie_server':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>On <b>{1}</b> 复制内容' +
    '<div class="code-snippet"><b>/hadoop/oozie/data/oozie-db</b></div></li>' +
    '<li>到目标主机 <b>{2}</b></li>' +
    '<li>如果该目录不存在，您可以通过运行创建' +
    '<div class="code-snippet">mkdir -p /hadoop/oozie/data/oozie-db</div></li>' +
    '<li>通过运行更新目录权限' +
    '<div class="code-snippet">chown -R oozie:{5} /hadoop/oozie/data</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.mysql_server':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>On <b>{1}</b> 使用终端可以导出Metastore DB（MYSQL）:' +
    '<div class="code-snippet">mysqldump db_name > backup-file.sql</div></li>' +
    '<li>将文件复制到目标主机 <b>{2}</b> 托管MySQL数据库</li>' +
    '<li>在里面执行这个SQL <b>mysql<b>' +
    '<div class="code-snippet">CREATE DATABASE db_name;</div></li>' +
    '<li>使用导入数据库' +
    '<div class="code-snippet">mysql db_name < backup-file.sql</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.app_timeline_server':
    '<div class="alert alert-info">' +
    '<ol>' +
    '<li>复制 <b>{7}/{8}</b> 从源主机 <b>{1}</b> 到 <b>{7}/{8}</b> 在目标主机上 <b>{2}</b>.</li>' +
    '<li>登录到目标主机 <b>{2}</b> 并通过运行来更改权限:' +
    '<div class="code-snippet">chown -R {3}:{5} {7}/{8}</div></li>' +
    '<div class="code-snippet">chmod -R 700 {7}/{8}</div></li>' +
    '</ol>' +
    '</div>',
  'services.reassign.step5.body.securityNotice':
    '<div class="alert alert-info"> <div class="alert alert-warning"> <strong>Note: </strong> 安全集群' +
    ' 需要为重新分配的组件生成必要的原则，并在主体上创建keytab文件 ' +
    '目标主机. keytab文件应该可以访问服务用户.</div> {0} </div>',
  'services.reassign.step5.body.securityConfigsList':
    '创建keytab文件 <b>{0}</b> 用主要的 <b>{1}</b> on <b>{2}</b> 主机.',
  'services.reassign.step5.body.proceedMsg': '完成上述步骤后请继续',
  'services.reassign.step5.confirmPopup.body': '请确认您已经运行手动步骤继续.',
  'services.reassign.step6.header': '开始和测试服务',
  'services.reassign.step6.tasks.putHostComponentsInMaintenanceMode.title': '禁用 {0}',
  'services.reassign.step6.tasks.deleteHostComponents.title': '删除禁用 {0}',
  'services.reassign.step6.tasks.startAllServices.title': '开始所有服务',
  'services.reassign.step6.tasks.installPxf.title': '在NameNode上安装PXF',
  'services.reassign.step6.tasks.stopMysqlService.title': '停止Mysql服务器',
  'services.reassign.step6.tasks.stopHostComponentsInMaintenanceMode.title': '停止 {0}',
  'services.reassign.step6.tasks.startDatanodes.title': '开启DataNodes',
  'services.reassign.step6.status.success':
    '成功移动 <b>{0}</b> 从 <b>{1}</b> 主机到 <b>{2}</b> 主机.',
  'services.reassign.step6.status.failed':
    '无法移动 <b>{0}</b> 从 <b>{1}</b> 主机到 <b>{2}</b> 主机.',
  'services.reassign.step6.status.info': '重新分配 {0}. \n请等待所有任务完成.',
  'services.reassign.step7.header': '回滚',
  'services.reassign.step7.info': '正在回滚',
  'services.reassign.step7.failed': '回滚失败',
  'services.reassign.step7.success': '回滚成功完成',

  /** services page constants **/

  'service.hbase.activeMaster': '活跃的主机',

  'services.hive.client': 'Hive 客户端',
  'services.hive.clients': 'Hive 客户端',

  'services.falcon.client': 'Falcon 客户端',
  'services.falcon.clients': 'Falcon 客户端',

  'services.oozie.client': 'Oozie 客户端',
  'services.oozie.clients': 'Oozie 客户端',
  'services.oozie.webUi': 'Oozie 网络用户界面',

  'services.ganglia.webUi': 'Ganglia 网络用户界面',
  'services.ganglia.monitors': 'Ganglia Monitors',

  'services.mapreduce2.webUi': '历史服务器用户界面',

  'services.zookeeper.prefix': '{0} 的',
  'services.zookeeper.title': '{0} ZooKeepers',
  'services.zookeeper.postfix': '运行中',
  'services.zookeeper.clients': 'ZooKeeper 客户端',
  'services.zookeeper.client': 'ZooKeeper 客户端',

  'services.mapreduce2.history.running': '历史服务器正在运行',
  'services.mapreduce2.history.stopped': '历史服务器已停止',
  'services.mapreduce2.history.unknown': '历史服务器状态未知',
  'services.mapreduce2.smokeTest.requirement': 'MapReduce2烟雾测试要求启动YARN服务',

  'services.tez.client': 'Tez 客户端',
  'services.tez.clients': 'Tez 客户端',
  'services.pig.client': 'Pig 客户端',
  'services.pig.clients': 'Pig 客户端',
  'services.glusterfs.client': 'GLUSTERFS 客户端',
  'services.glusterfs.clients': 'GLUSTERFS 客户端',
  'services.sqoop.client': 'Sqoop 客户端',
  'services.sqoop.clients': 'Sqoop 客户端',

  'services.hbase.master.error': 'HBase主机都没有活动',

  'alerts.actions.manage_alert_groups_popup.header': '管理警报组',
  'alerts.actions.manage_alert_groups_popup.notice':
    '您可以在此对话框中管理每个服务的警报组. 查看警报组列表及其中配置的警报定义. ' +
    '您还可以添加/删除警报定义，并选择该警报组的通知.',
  'alerts.actions.manage_alert_groups_popup.rename': '改名',
  'alerts.actions.manage_alert_groups_popup.duplicate': '重复',
  'alerts.actions.manage_alert_groups_popup.group_name_lable': '名称',
  'alerts.actions.manage_alert_groups_popup.group_desc_lable': '描述',
  'alerts.actions.manage_alert_groups_popup.notifications': '通知',
  'alerts.actions.manage_alert_groups_popup.addButton': '创建警报组',
  'alerts.actions.manage_alert_groups_popup.addGroup.exist': '具有给定名称的警报组已存在',
  'alerts.actions.manage_alert_groups_popup.removeButton': '删除警报组',
  'alerts.actions.manage_alert_groups_popup.removeButtonDisabled': '无法删除默认警报组',
  'alerts.actions.manage_alert_groups_popup.renameButton': '重命名警报组',
  'alerts.actions.manage_alert_groups_popup.duplicateButton': '重复警报组',
  'alerts.actions.manage_alert_groups_popup.addDefinition.noDefinitions': '没有要显示的警报定义',
  'alerts.actions.manage_alert_groups_popup.addDefinition': '将警报定义添加到所选警报组',
  'alerts.actions.manage_alert_groups_popup.addDefinitionDisabled': '没有可用的警报定义添加',
  'alerts.actions.manage_alert_groups_popup.addDefinitionToDefault': '无法修改默认警报组',
  'alerts.actions.manage_alert_groups_popup.removeDefinition': '从所选警报组中删除警报定义',
  'alerts.actions.manage_alert_groups_popup.removeDefinitionDisabled': '无法修改默认警报组',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.title': '选择警报组定义',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.message':
    '选择要添加到此的警报定义 "{0}" 警报组.',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.filter.placeHolder': '所有',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.selectedDefsLink':
    '{0} 超出 {1} 所选择的警报定义',
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.message.warning':
    '需要至少选择一个警报定义.',

  'alerts.actions.manage_alert_notifications_popup.header': '管理警报通知',
  'alerts.actions.manage_alert_notifications_popup.noAlertNotification': '没有定义警报通知',
  'alerts.actions.manage_alert_notifications_popup.addButton': '创建新的警报通知',
  'alerts.actions.manage_alert_notifications_popup.addHeader': '创建警报通知',
  'alerts.actions.manage_alert_notifications_popup.removeButton': '删除警报通知',
  'alerts.actions.manage_alert_notifications_popup.editButton': '编辑警报通知',
  'alerts.actions.manage_alert_notifications_popup.editHeader': '编辑通知',
  'alerts.actions.manage_alert_notifications_popup.duplicateButton': '重复提醒通知',
  'alerts.actions.manage_alert_notifications_popup.disableButton': '禁用警报通知',
  'alerts.actions.manage_alert_notifications_popup.enableButton': '启用警报通知',
  'alerts.actions.manage_alert_notifications_popup.method': '方法',
  'alerts.actions.manage_alert_notifications_popup.email': '发邮件给',
  'alerts.actions.manage_alert_notifications_popup.SMTPServer': 'SMTP服务器',
  'alerts.actions.manage_alert_notifications_popup.SMTPPort': 'SMTP端口',
  'alerts.actions.manage_alert_notifications_popup.SMTPUseAuthentication': '使用身份验证',
  'alerts.actions.manage_alert_notifications_popup.SMTPUsername': '用户名',
  'alerts.actions.manage_alert_notifications_popup.SMTPPassword': '密码',
  'alerts.actions.manage_alert_notifications_popup.retypeSMTPPassword': '确认密码',
  'alerts.actions.manage_alert_notifications_popup.SMTPSTARTTLS': '启动TLS',
  'alerts.actions.manage_alert_notifications_popup.emailFrom': '电子邮件从',
  'alerts.actions.manage_alert_notifications_popup.version': '版',
  'alerts.actions.manage_alert_notifications_popup.OIDs': 'OID',
  'alerts.actions.manage_alert_notifications_popup.community': '社区',
  'alerts.actions.manage_alert_notifications_popup.host': '主机',
  'alerts.actions.manage_alert_notifications_popup.port': '端口',
  'alerts.actions.manage_alert_notifications_popup.global': '全域',
  'alerts.actions.manage_alert_notifications_popup.noDescription': '<i>无描述</i>',
  'alerts.actions.manage_alert_notifications_popup.noGroup': '<i>无选择</i>',
  'alerts.actions.manage_alert_notifications_popup.severityFilter': '严重性',
  'alerts.actions.manage_alert_notifications_popup.clearAll': '全部清除',
  'alerts.actions.manage_alert_notifications_popup.selectAll': '全选',
  'alerts.actions.manage_alert_notifications_popup.confirmDeleteHeader': '确认删除',
  'alerts.actions.manage_alert_notifications_popup.confirmDeleteBody': '你确定你要删除 {0} 通知?',
  'alerts.actions.manage_alert_notifications_popup.error.name.empty': '通知名称是必需的',
  'alerts.actions.manage_alert_notifications_popup.error.name.existed': '通知名称已存在',

  'hosts.host.add': '添加新主机',
  'hosts.table.noHosts': '没有主机显示',

  'hosts.filters.filteredHostsInfo': '{0} of {1} 主机显示',

  'hosts.filters.selectedHostInfo': '选择主机',
  'hosts.filters.selectedHostsInfo': '所选主机',

  'hosts.filters.clearSelection': '清空选项',

  'hosts.filters.filterComponents': '过滤 <strong>按组件</strong>',

  'hosts.table.restartComponents.withNames': '重启 {0}',
  'hosts.table.restartComponents.withoutNames': '{0} 组件应重新启动',

  'hosts.table.componentsInPassiveState.withNames': '{0} 在维护模式下',
  'hosts.table.componentsInPassiveState.withoutNames': '{0} 维护模式下的组件',

  'hosts.table.menu.l1.selectedHosts': '所选主机',
  'hosts.table.menu.l1.filteredHosts': '已筛选的主机',
  'hosts.table.menu.l1.allHosts': '所有主机',
  'hosts.table.menu.l2.allComponents': '所有组件',
  'hosts.table.menu.l2.restartAllComponents': '重新启动所有组件',
  'hosts.table.menu.l2.reinstallFailedComponents': '重新安装失败的组件',

  'hosts.bulkOperation.confirmation.header': '确认批量操作',
  'hosts.bulkOperation.confirmation.hosts': '你确定你要 <strong>{0}</strong> 在下面 {1} 主机?',
  'hosts.bulkOperation.confirmation.hostComponents':
    '你确定你要 <strong>{0} {1}</strong> 在下面的 {2} 主机?',
  'hosts.bulkOperation.passiveState.nothingToDo.body': '您选择的所有主机都已处于维护模式.',
  'hosts.bulkOperation.warningInfo.body': '这些主机上的组件被停止，因此将跳过停用.',
  'hosts.bulkOperation.host_components.passiveState.nothingToDo.body':
    '您选择的所有主机组件都已处于维护模式',
  'hosts.bulkOperation.confirmation.add.component':
    '你正在去 <strong>{0} {1}</strong> 下面的 {2} 主机.',
  'hosts.bulkOperation.confirmation.add.component.skip': '以下主机已经被跳过了 {0} 已安装.',
  'hosts.bulkOperation.confirmation.add.component.nothingToDo.body':
    '所有选定的主机都有 {0} 已经安装.',
  'hosts.bulkOperation.deleteHosts.dryRun.header': '确认批量删除主机',
  'hosts.bulkOperation.deleteHosts.dryRun.message':
    '有<strong> {0}主机</ strong>无法删除（原因扩展）:',
  'hosts.bulkOperation.deleteHosts.dryRun.primary': '删除其他{0}主机',
  'hosts.bulkOperation.deleteHosts.confirmation.header': '确认批量删除主机',
  'hosts.bulkOperation.deleteHosts.confirmation.body': '您确定要删除主机吗:',
  'hosts.bulkOperation.deleteHosts.confirmation.body.msg1':
    '通过删除上述主机，Ambari将忽略他们未来的沟通. 软件包将不会从主机中删除. 主机上的组件不应重新启动. 如果您希望将主机读取到集群，请务必将其清理.',
  'hosts.bulkOperation.deleteHosts.confirmation.body.msg2':
    '<b>警告！</ b>如果代理仍然心跳，则主机仍将存在于数据库中.',
  'hosts.bulkOperation.deleteHosts.confirmation.body.msg3':
    '要完全删除主机，请首先停止它们的ambari-agent.',
  'hosts.bulkOperation.deleteHosts.confirmation.body.msg4':
    '如果主机托管Zookeeper服务器，则应重新启动Zookeeper服务. 转到<i>服务</ i>页面.',
  'hosts.bulkOperation.deleteHosts.result.header': '删除主机',
  'hosts.bulkOperation.deleteHosts.result.body': '以下主机已成功删除:',
  'hosts.bulkOperation.confirmation.delete.component.minimum.body': '集群中应至少安装{0} {1}.',
  'hosts.bulkOperation.confirmation.delete.component.nothingToDo.body':
    '{0}既不安装在选定的主机上也不安装在可以删除的状态中.',
  'hosts.bulkOperation.confirmation.delete.component.skip':
    '以下主机将被跳过{0}，因为它们不在可以删除的状态.',
  'hosts.bulkOperation.delete.component.result.header': '删除主机',
  'hosts.bulkOperation.delete.component.result.body': '以下主机已成功删除:',
  'hosts.bulkOperation.delete.component.dryRun.message':
    '有<strong> {0}主机</ strong>无法删除（原因扩展）:',

  'hosts.selectHostsDialog.title': '选择配置组主机',
  'hosts.selectHostsDialog.message':
    '选择属于这个主机 {0} 配置组. 属于此组的所有主机将具有相同的一组配置.',
  'hosts.selectHostsDialog.filter.placeHolder': '过滤...',
  'hosts.selectHostsDialog.selectedHostsLink': '{0} 除了 {1} 已选的主机',
  'hosts.selectHostsDialog.message.warning': '至少需要一个主机.',

  'hosts.host.serviceNotAvailable': '此主机上不提供服务',

  'hosts.host.menu.logs': '日志',

  'hosts.host.menu.stackVersions': '版本',
  'hosts.host.stackVersions.table.allVersions': '所有版',
  'hosts.host.stackVersions.table.allNames': '所有名称',
  'hosts.host.stackVersions.table.noVersions': '无此版',
  'hosts.host.stackVersions.table.filteredInfo': '{0} {1} 显示的版本',
  'hosts.host.stackVersions.status.init': '卸载',
  'hosts.host.stackVersions.status.installed': '已安装',
  'hosts.host.stackVersions.status.install_failed': '安装失败',
  'hosts.host.stackVersions.status.installing': '安装',
  'hosts.host.stackVersions.status.current': '当前',
  'hosts.host.stackVersions.status.out_of_sync': '不同步',
  'hosts.host.stackVersions.status.upgrading': '升级',
  'hosts.host.stackVersions.status.upgrade_failed': '升级失败',
  'hosts.host.stackVersions.outOfSync.tooltip':
    '此版本在此主机上不同步. 可能会发生不同步 ' +
    '安装版本不使用后，主机上的组件会发生更改. ' +
    '单击安装以使Ambari安装此版本的软件包以使该主机同步.',
  'hosts.host.stackVersions.install.confirmation': '您即将安装版本 <b>{0}</b> 在这个主机上.',

  'hosts.host.metrics.dataUnavailable': '数据不可用',
  'hosts.host.metrics.cpu': 'CPU使用率',
  'hosts.host.metrics.cpu.displayNames.cpu_wio': 'CPU I/O 空闲',
  'hosts.host.metrics.cpu.displayNames.cpu_idle': 'CPU 空闲',
  'hosts.host.metrics.cpu.displayNames.cpu_nice': 'CPU 良好',
  'hosts.host.metrics.cpu.displayNames.cpu_aidle': 'CPU引导空闲',
  'hosts.host.metrics.cpu.displayNames.cpu_system': 'CPU系统',
  'hosts.host.metrics.cpu.displayNames.cpu_user': 'CPU用户',
  'hosts.host.metrics.disk': '磁盘使用情况',
  'hosts.host.metrics.disk.displayNames.disk_total': '总共',
  'hosts.host.metrics.disk.displayNames.disk_free': '可用',
  'hosts.host.metrics.load': '负载',
  'hosts.host.metrics.load.displayNames.load_fifteen': '15分钟负载',
  'hosts.host.metrics.load.displayNames.load_one': '1分钟负载',
  'hosts.host.metrics.load.displayNames.load_five': '5分钟负载',
  'hosts.host.metrics.memory': '内存使用情况',
  'hosts.host.metrics.memory.displayNames.mem_shared': '共享',
  'hosts.host.metrics.memory.displayNames.swap_free': '交换',
  'hosts.host.metrics.memory.displayNames.mem_buffers': '缓冲',
  'hosts.host.metrics.memory.displayNames.mem_free': '空闲',
  'hosts.host.metrics.memory.displayNames.mem_cached': '缓存',
  'hosts.host.metrics.network': '网络使用',
  'hosts.host.metrics.network.displayNames.pkts_out': '分组',
  'hosts.host.metrics.network.displayNames.bytes_in': '字节',
  'hosts.host.metrics.network.displayNames.bytes_out': '字节出',
  'hosts.host.metrics.network.displayNames.pkts_in': '数据包',
  'hosts.host.metrics.processes': '过程',
  'hosts.host.metrics.processes.displayNames.proc_total': '总流程',
  'hosts.host.metrics.processes.displayNames.proc_run': '进程运行',

  'hosts.host.summary.header': '概要',
  'hosts.host.summary.hostname': '主机名',
  'hosts.host.summary.agentHeartbeat': '心跳',
  'hosts.host.summary.agentHasJce': 'JCE无限制',
  'hosts.host.summary.hostMetrics': '主机指标',
  'hosts.host.summary.hostLogMetrics': '主机日志指标',
  'hosts.host.summary.addComponent': '添加组件',
  'hosts.host.summary.currentVersion': '当前版本',

  'hosts.host.details.hostActions': '主机操作',
  'hosts.host.details.needToRestart': '主机需要 {0} {1} 重启',
  'hosts.host.details.needToRestart.button': '重启',
  'hosts.host.details.deleteHost': '删除主机',
  'hosts.host.details.startAllComponents': '启动所有组件',
  'hosts.host.details.stopAllComponents': '停止所有组件',
  'hosts.host.details.restartAllComponents': '重启所有组件',
  'hosts.host.details.deleteHosts': '删除主机',
  'hosts.host.details.refreshConfigs': '刷新配置',
  'hosts.host.details.for.postfix': '{0} 为了主机',
  'hosts.host.details.setRackId': '设置框架',
  'host.host.details.installClients': '安装客户端',
  'host.host.details.reinstallClients': '重新安装客户端',
  'host.host.details.checkHost': '检查主机',
  'host.host.details.downloadAllClients': '在主机上的所有客户端',

  'host.host.componentFilter.master': '主组件',
  'host.host.componentFilter.slave': '从属组件',
  'host.host.componentFilter.client': '客户端组件',
  'hosts.host.deleteComponent.popup.msg1': '你确定你要删除 {0}?',
  'hosts.host.deleteComponent.popup.deleteJournalNodeMsg':
    '您即将打开<i>管理日记帐节点向导</ i>. 你确定?',
  'hosts.host.deleteComponent.popup.warning':
    '<b>警告!</b> 删除最后一个 <i>{0}</i> 组件中的组件?</br>删除群集中的最后一个组件可能导致永久丢失服务数据.',
  'hosts.host.deleteComponent.popup.confirm': '确认删除',
  'hosts.host.installComponent.popup.confirm': '确认安装',
  'hosts.host.installComponent.msg': '你确定要安装 {0}?',
  'hosts.host.addComponent.msg': '你确定要添加 {0}?',
  'hosts.host.addComponent.deleteHostWithZooKeeper':
    '使用ZooKeeper Server删除主机可能会重新配置此类属性:<ul><li>ha.zookeeper.quorum</li><li>hbase.zookeeper.quorum</li><li>templeton.zookeeper.hosts</li><li>yarn.resourcemanager.zk-address</li><li>hive.zookeeper.quorum</li><li>hive.cluster.delegation.token.store.zookeeper.connectString</li></ul>',
  'host.host.addComponent.popup.dependedComponents.body':
    '{0} 需要将 {1} 与它一起安装在同一台主机上. P请先添加它们然后尝试添加 {0}',
  'host.host.addComponent.popup.dependedComponents.header': '组件依赖',
  'host.host.addComponent.popup.clients.dependedComponents.body':
    '{0} 要求 {1} 与他们一起安装在同一台主机上. 请先添加它们',
  'hosts.host.zooKeeper.configs.save.note': '此配置由安装在主机上安装/删除zookeeper组件时创建',
  'hosts.host.addComponent.securityNote':
    '您正以安全模式运行群集.  您必须在 {0} 之前设置 {1} 的密钥表然后再继续. 否则, 组件将无法正常启动.',
  'hosts.host.addComponent.popup.confirm': '确认添加',
  'hosts.host.manualKerberosWarning':
    '<strong>由于Kerberos已经手动安装在群集上，所以当此操作完成后，您必须创建/分发主体和keytab.</strong>',
  'hosts.host.deleteComponent.popup.deleteNimbus':
    '删除 <i>Storm Nimbus</i> 将重新配置 <b>nimbus.seeds</b>, <b>topology.min.replication.count</b>, <b>topology.max.replication.wait.time.sec</b> 属性如果被定义.',
  'hosts.host.storm.configs.save.note': '此配置由安装在主机上安装/删除风暴组件时创建',
  'hosts.host.datanode.decommission': 'Decommission DataNode',
  'hosts.host.datanode.recommission': '重新启动 DataNode',
  'hosts.host.nodemanager.decommission': '降级节点管理器',
  'hosts.host.nodemanager.recommission': '降级节点管理器',
  'hosts.host.tasktracker.decommission': 'Decommission TaskTracker',
  'hosts.host.tasktracker.recommission': '重新启动 TaskTracker',
  'hosts.host.tasktracker.restart': '重新启动 TaskTracker',
  'hosts.host.regionserver.decommission.batch1': '断电区域服务器 - 打开排水模式',
  'hosts.host.regionserver.decommission.batch2': 'Decommission RegionServer - 停止 RegionServer',
  'hosts.host.regionserver.decommission.batch3': 'Decommission RegionServer - 关闭排水模式',
  'hosts.host.hbase_regionserver.recommission': 'Recommission RegionServer',
  'hosts.host.hbase_regionserver.decommission': 'Decommission RegionServer',
  'hosts.host.hbase_regionserver.decommission.warning': '最后的区域服务器不能停用',
  'hosts.host.decommissioned': 'Decommissioned',
  'hosts.host.decommissioning': 'Decommissioning',
  'hosts.host.addComponent.JOURNALNODE': '您即将打开<i>管理日记帐节点向导</ i>. 你确定?',
  'hosts.host.deleteComponent.popup.deleteHiveMetastore':
    '删除 <i>Hive Metastore</i> 将重新配置此类属性:<ul><li>hive.metastore.uris</li><li>templeton.hive.properties</li></ul>',
  'hosts.host.deleteComponent.popup.deleteWebHCatServer':
    '您即将删除 <i>WebHCat服务器</i>. 你确定?',
  'hosts.host.configs.save.note': '这个配置是在一个主机上安装/删除 {0} 组件时由ambari创建的',

  'hosts.component.passive.implied.host.mode.tooltip': '由于主机处于维护模式无法关闭维护模式',
  'hosts.component.passive.implied.service.mode.tooltip':
    '由于 {0} 处于维护模式，因此无法关闭维护模式',
  'hosts.component.passive.mode': '组件处于维护模式',
  'hosts.component.passive.short.mode': '维护模式',
  'hosts.host.passive.mode': '主机处于维护模式',
  'hosts.host.alert.noAlerts': '没有警报',
  'hosts.host.alert.noAlerts.message': '此主机没有警报.',
  'hosts.host.healthStatus.heartBeatNotReceived': '服务器没有收到此主机超过3分钟的心跳.',
  'hosts.host.healthStatus.mastersDown': '以下主要组件关闭:\n',
  'hosts.host.healthStatus.slavesDown': '以下从站组件已关闭:\n',
  'hosts.host.healthStatus.allUp': '所有组件都已启动',
  'hosts.host.healthStatusCategory.green': '正常',
  'hosts.host.healthStatusCategory.red': 'Master Down',
  'hosts.host.healthStatusCategory.orange': 'Slave Down',
  'hosts.host.healthStatusCategory.yellow': '失去连接',
  'hosts.host.alerts.label': '警报',
  'hosts.host.maintainance.allComponents.context': '所有主机组件',
  'hosts.host.maintainance.stopAllComponents.context': '停止所有主机组件',
  'hosts.host.maintainance.startAllComponents.context': '启动所有主机组件',
  'hosts.host.maintainance.reinstallFailedComponents.context': '重新安装失败的组件',
  'hosts.host.alerts.st': '&nbsp;!&nbsp;',
  'hosts.decommission.popup.body': '你确定?',
  'hosts.decommission.popup.header': '确认',
  'hosts.decommission.tooltip.warning': '{0} 无法运行 {1}',
  'hosts.delete.popup.body': '你确定要删除主机吗 <i>{0}</i>?',
  'hosts.delete.popup.body.msg1':
    '通过删除该主机. Ambari将忽略来自该主机的未来通信. 软件包将不会从主机中删除. 主机上的组件不应重新启动.如果您希望将此主机读取到集群, 请确保清理主机.',
  'hosts.delete.popup.body.msg3':
    '如果该主机托管Zookeeper服务器, 则应重新启动Zookeeper服务. 转到 <i>服务</i> 页面.',
  'hosts.delete.popup.body.msg4':
    '<b>警告!</b> 删除集群中最后一个 <i>{0}</i> 组件[s]?</br>删除集群中的最后一个组件可能会导致永久丢失服务数据.',
  'hosts.delete.popup.body.msg5': '<b>警告!</b> 代理仍然保持心跳状态，因此主机仍将存在于数据库中.',
  'hosts.delete.popup.body.msg6': '要完全删除主机, 请首先停止 ambari-agent.',
  'hosts.delete.popup.body.msg7': '<b>警告!</b> {0} 应首先退役以防止数据丢失.',
  'hosts.delete.popup.body.msg.unknownComponents':
    '该主机似乎并不在线并且与该Agent的Ambari通信已经丢失.',
  'hosts.delete.popup.header': '确认',
  'hosts.delete.popup.title': '删除主机',
  'hosts.delete.popup.unknownComponents': '以下组件具有未知状态:',
  'hosts.cant.do.popup.title': '无法删除主机',
  'hosts.cant.do.popup.masterList.body': '该主机不能被删除,因为它具有以下主组件:',
  'hosts.cant.do.popup.masterList.body.end': '要删除此主机,您必须先移动或删除上面列出的所有主组件.',
  'hosts.cant.do.popup.nonDeletableList.body': '不支持删除以下 {0} 组件. ',
  'hosts.cant.do.popup.runningList.body': '由于以下组件正在运行,因此无法删除此主机:',
  'hosts.cant.do.popup.runningList.body.end':
    '要删除此主机, 您必须首先停止上面列出的所有运行组件. ' +
    '如果这个主机有一个 {0}, 它应该先停用以防止数据丢失.',
  'hosts.add.header': '添加主机向导',
  'hosts.add.exit.header': '退出',
  'hosts.add.exit.body': '你真的要退出添加主机向导?',
  'hosts.assignRack': '分配机架',
  'hosts.checkHost.popup': '您确定要<b>检查主机</b> {0}?',
  'hosts.passiveMode.popup': '您确定要 <b>{1} {0} 维护模式</b>  ?',
  'hosts.passiveMode.popup.version.mismatch':
    '{0} 具有不是当前的堆栈的组件. 在将此主机退出维护模式之前, 建议将其组件升级到{1}',
  'hosts.passiveMode.popup.version.mismatch.multiple':
    '一些主机具有不是当前的堆栈的组件. 在将这些主机退出维护模式之前, 建议您将其组件升级到{0}',
  'hosts.combo.search.placebolder': '按主机和组件属性过滤或按关键字搜索 ...',
  'hosts.combo.search.invalidCategory': '不是有效的类别.',
  'charts.horizon.chart.showText': '显示',
  'charts.horizon.chart.hideText': '隐藏',
  'charts.horizon.chart.attributes.cpu': 'CPU',
  'charts.horizon.chart.attributes.memory': '内存',
  'charts.horizon.chart.attributes.network': '网络',
  'charts.horizon.chart.attributes.io': 'I/O',

  'charts.heatmap.selectMetric': '选择公制',

  'charts.heatmap.category.host': '主机',
  'charts.heatmap.item.host.memory': '使用内存',
  'charts.heatmap.item.host.disk': '使用的磁盘空间',
  'charts.heatmap.item.host.process': '总运行过程',
  'charts.heatmap.category.hdfs': 'HDFS',
  'charts.heatmap.category.yarn': 'YARN',
  'charts.heatmap.category.hbase': 'HBase',
  'charts.heatmap.unknown': '未知',
  'charts.heatmap.label.notApplicable': '不适用',
  'charts.heatmap.label.invalidData': '数据无效',
  'metric.notFound': '未找到任何项目',
  'metric.default': '结合在一起',
  'metric.cpu': 'cpu',
  'metric.memory': '使用磁盘',
  'metric.network': '网络',
  'metric.io': 'io',
  'metric.more': '更多',
  'metric.more.cpu': 'CPU',
  'metric.more.disk': '磁盘',
  'metric.more.load': '加载',
  'metric.more.memory': '内存',
  'metric.more.network': '网络',
  'metric.more.process': '进程',

  'dashboard.clusterMetrics': '集群度量',

  'dashboard.clusterMetrics.cpu': 'CPU使用率',
  'dashboard.clusterMetrics.cpu.displayNames.idle': '空闲',
  'dashboard.clusterMetrics.load': '群集负载',
  'dashboard.clusterMetrics.memory': '内存使用情况',
  'dashboard.clusterMetrics.network': '网络使用',

  'dashboard.widgets.title': '指标',
  'dashboard.heatmaps.title': 'Heatmaps',
  'dashboard.button.switch': '切换到经典仪表板',
  'dashboard.button.switchShort': '切换',
  'dashboard.button.reset': '将所有小部件重置为默认值 ',
  'dashboard.widgets.actions.title': '公制动作',
  'dashboard.widgets.create': '创建组件',
  'dashboard.widgets.actions.browse': '浏览组件',
  'dashboard.widgets.layout.import': '导入布局',
  'dashboard.widgets.layout.save': '保存布局',
  'dashboard.widgets.addButton.tooltip': '添加组件',
  'dashboard.widgets.browser.header': '组件浏览器',
  'dashboard.widgets.browser.menu.shared': '共享',
  'dashboard.widgets.browser.menu.mine': '我的',
  'dashboard.widgets.browser.noWidgets': '没有组件显示',
  'dashboard.widgets.browser.footer.checkbox': '只显示我的组件',
  'dashboard.widgets.browser.action.add': '添加',
  'dashboard.widgets.browser.action.added': '添加',
  'dashboard.widgets.browser.action.delete': '删除',
  'dashboard.widgets.browser.action.unshare': '取消分享',
  'dashboard.widgets.browser.action.share': '分享',
  'dashboard.widgets.browser.action.share.confirmation':
    '您即将使其成为共享组件. 所有群集操作员都可以修改或删除此组件. 您确定要共享此组件?',
  'dashboard.widgets.browser.shareIcon.tooltip': '共享',
  'dashboard.widgets.browser.action.delete.shared.bodyMsg':
    '您即将永久删除 <b>{0}</b> 组件. ' +
    '此小部件是一个共享的小部件,此操作将从共享的小部件库中删除小部件,并删除 ' +
    '所有用户的组件.<br /> <br /> <b>您确定要永久删除此共享组件?</b>',
  'dashboard.widgets.browser.action.delete.mine.bodyMsg':
    '您即将永久删除 <b>{0}</b> 组件. ' +
    'This operation will delete the widget from your widget library.<br /><br /><b>您确定要永久' +
    '删除这个组件?</b>',
  'dashboard.widgets.browser.action.delete.btnMsg': '确认删除',

  'dashboard.widgets.NameNodeHeap': '主节点 堆',
  'dashboard.widgets.NameNodeCpu': '主节点 CPU WIO',
  'dashboard.widgets.HDFSDiskUsage': 'HDFS 磁盘使用',
  'dashboard.widgets.HDFSDiskUsage.DFSused': '使用DFS',
  'dashboard.widgets.HDFSDiskUsage.nonDFSused': '非DFS使用',
  'dashboard.widgets.HDFSDiskUsage.remaining': '剩下的',
  'dashboard.widgets.HDFSDiskUsage.info': '{0} ({1}%)',
  'dashboard.widgets.DataNodeUp': 'DataNodes Live',
  'dashboard.widgets.SuperVisorUp': 'Supervisors Live',
  'dashboard.widgets.FlumeAgentUp': 'Flume Live',
  'dashboard.widgets.NameNodeRpc': '主节点 RPC',
  'dashboard.widgets.nothing': '没有组件添加',
  'dashboard.widgets.NameNodeUptime': '主节点 正常运行时间',
  'dashboard.widgets.HDFSLinks': 'HDFS 链接',
  'dashboard.widgets.HDFSLinks.activeNameNode': '活跃的主节点',
  'dashboard.widgets.HDFSLinks.standbyNameNode': '待命的主节点',
  'dashboard.widgets.HDFSLinks.standbyNameNodes': '2 待命主节点',
  'dashboard.widgets.HBaseLinks': 'HBase链接',
  'dashboard.widgets.HBaseAverageLoad': 'HBase Ave负载',
  'dashboard.widgets.HBaseMasterHeap': 'HBase主堆',
  'dashboard.widgets.HBaseRegionsInTransition': '转型地区',
  'dashboard.widgets.HBaseMasterUptime': 'HBase主机正常运行',
  'dashboard.widgets.ResourceManagerHeap': '资源管理器堆',
  'dashboard.widgets.ResourceManagerUptime': '资源管理器正常运行时间',
  'dashboard.widgets.NodeManagersLive': '节点管理器 Live',
  'dashboard.widgets.YARNMemory': 'YARN 内存',
  'dashboard.widgets.YARNLinks': 'YARN 链接',
  'dashboard.widgets.error.invalid': '无效! 输入{0} - {1}之间的数字',
  'dashboard.widgets.error.smaller': '阈值1 应小于阈值 2!',
  'dashboard.widgets.HawqSegmentUp': 'HAWQ 段 Live',
  'dashboard.widgets.PxfUp': 'PXF 代理 Live',
  'dashboard.widgets.PXFAgents': 'PXF 代理',

  dashboard: {
    widgets: {
      popupHeader: '自定义组件',
      hintInfo: {
        common: '编辑百分比阈值以更改当前饼图的颜色. <br />输入 0 到 {0}之间的两个数字',
        hint1:
          '编辑阈值的百分比来更改当前窗口组件的颜色. <br />假设所有组件UP为100, 全部DOWN为0. <br /> 输入0到{0}之间的两个数字',
        hint2: '编辑阈值以更改当前组件的颜色.<br /><br />输入两个大于0的数字.',
        hint3: '编辑阈值以更改当前组件的颜色.<br />单位是毫秒. <br />输入两个大于0的数字. ',
        hint4:
          '编辑表示向下调整的{0} 数的阈值,以更改窗口组件的颜色. <br />如果关闭的{0} 数量大于阈值,该小部件将以红色显示警告. <br />选择0到{1}之间的数字. ',
      },
    },
  },

  'dashboard.services': '服务',
  'dashboard.services.hosts': '主机',
  'dashboard.services.uptime': '{0}',
  'dashboard.services.summary.slaves.live': 'Live',
  'dashboard.services.hdfs.summary': '{0}个节点的{1} 居住, {2}% 的容量使用',
  'dashboard.services.hdfs.nanmenode': '主节点',
  'dashboard.services.hdfs.snanmenode': '第二节点',
  'dashboard.services.hdfs.journalnodes': 'JournalNodes',
  'dashboard.services.hdfs.capacity': 'HDFS磁盘使用',
  'dashboard.services.hdfs.capacity.dfsUsed': '磁盘使用量 (使用DFS)',
  'dashboard.services.hdfs.capacity.nonDfsUsed': '磁盘使用量 (不使用DFS)',
  'dashboard.services.hdfs.capacity.remaining': '磁盘剩余',
  'dashboard.services.hdfs.capacityUsed': '{0} / {1} ({2}%)',
  'dashboard.services.hdfs.totalFilesAndDirs': '文件总数 + 目录',
  'dashboard.services.hdfs.datanodes': '数据节点',
  'dashboard.services.hdfs.datanodecounts': '数据节点状态',
  'dashboard.services.hdfs.nfsgateways': 'NFSGateways',
  'dashboard.services.hdfs.version': '版本',
  'dashboard.services.hdfs.nameNodeWebUI': '主节点网页界面',
  'dashboard.services.hdfs.nodes.live': '存活',
  'dashboard.services.hdfs.nodes.dead': '死亡',
  'dashboard.services.hdfs.nodes.decom': '退役',
  'dashboard.services.hdfs.nodes.uptime': '主节点正常运行时间',
  'dashboard.services.hdfs.nodes.heap': '主节点堆',
  'dashboard.services.hdfs.nodes.heapUsed': '{0} / {1} ({2}% 使用)',
  'dashboard.services.hdfs.chart.label': '容量 (使用/总计)',
  'dashboard.services.hdfs.blockErrors': '{0} 损坏的副本 / {1} 缺少 / {2} 在复制下',
  'dashboard.services.hdfs.datanode.status.tooltip.live':
    '这是从NameNode报告的实时数据节点的数量. 即使DataNode进程已经启动,如果DataNode没有像预期的那样与NameNode进行通信,NameNode也可能会看到状态为dead. 这可能是由于过多的垃圾回收引起的网络问题或挂起的DataNode进程.',
  'dashboard.services.hdfs.datanode.status.tooltip.dead':
    '这是从NameNode报告的死亡的DataNodes的数量. 即使DataNode进程已经启动, 如果DataNode没有像预期的那样与NameNode进行通信,NameNode也可能会看到状态为dead. 这可能是由于过多的垃圾回收引起的网络问题或挂起的DataNode进程.',
  'dashboard.services.hdfs.datanode.status.tooltip.decommission':
    '这是从NameNode报告的当前正在退役的DataNodes的数量. 如果群集中没有足够的其他数据节点根据dfs.replication属性（通常为3）创建配置的块副本数, DataNode可以停止退役状态,直到更多的DataNodes可用于NameNode.',

  'dashboard.services.yarn.summary': '{0}  {1} 节点存在',
  'dashboard.services.yarn.resourceManager': '资源管理器',
  'dashboard.services.yarn.nodeManagers': '节点管理器',
  'dashboard.services.yarn.nodeManager': '节点管理器',
  'dashboard.services.yarn.nodes.heapUsed': '{0} / {1} ({2}% 使用)',
  'dashboard.services.yarn.clients': 'YARN Clients',
  'dashboard.services.yarn.client': 'YARN Client',
  'dashboard.services.yarn.resourceManager.uptime': '资源管理器正常运行时间',
  'dashboard.services.yarn.resourceManager.active': '活跃的资源管理器',
  'dashboard.services.yarn.resourceManager.standby': '待命资源管理器',
  'dashboard.services.resourceManager.nodes.heap': '资源管理器堆',
  'dashboard.services.yarn.nodeManagers.status': '节点管理器状态',
  'dashboard.services.yarn.nodeManagers.status.active': '活动',
  'dashboard.services.yarn.nodeManagers.status.lost': '丢失',
  'dashboard.services.yarn.nodeManagers.status.unhealthy': '不良',
  'dashboard.services.yarn.nodeManagers.status.rebooted': 'rebooted',
  'dashboard.services.yarn.nodeManagers.status.decommissioned': '退除',
  'dashboard.services.yarn.nodeManagers.status.tooltip.active':
    '这是从ResourceManager报告的活动的NodeMan的数量',
  'dashboard.services.yarn.nodeManagers.status.tooltip.lost':
    '这是从ResourceManager报告的丢失的节点管理器的数量. ' +
    '即使NodeManager进程已启动，如果NodeManager未与该通信进行通信，则ResourceManager可能会将状态看作是丢失状态 ' +
    'ResourceManager如预期. 这可能是由于网络问题或由于垃圾回收过多而导致的NodeManager进程挂起的情况.',
  'dashboard.services.yarn.nodeManagers.status.tooltip.unhealthy':
    '这是从ResourceManager报告的不健康的NodeManager的数量.',
  'dashboard.services.yarn.nodeManagers.status.tooltip.rebooted':
    '这是从ResourceManager报告的处于重新引导状态的NodeManager的数量.',
  'dashboard.services.yarn.nodeManagers.status.tooltip.decommissioned':
    '这是从ResourceManager报告的已停用的NodeManager的数量.',
  'dashboard.services.yarn.containers': '集装箱',
  'dashboard.services.yarn.containers.msg': '{0} 已分配 / {1} 待处理 / {2} 保留',
  'dashboard.services.yarn.apps': '应用',
  'dashboard.services.yarn.apps.msg':
    '{0} 提交 / {1} 执行 / {2} 等待 / {3} 完成 / {4} 杀掉 / {5} 失败',
  'dashboard.services.yarn.memory': '群集内存',
  'dashboard.services.yarn.memory.msg': '{0} 已使用 / {1} 保留 / {2} 可用',
  'dashboard.services.yarn.queues': '队列',
  'dashboard.services.yarn.queues.msg': '{0} 队列',
  'dashboard.services.hawq.hawqSegments': 'HAWQ 段',
  'dashboard.services.pxf.pxfHosts': 'PXF',

  'dashboard.services.flume.summary.title': 'Flume安装在{0} 宿主{1} 上({2} 代理{3})',
  'dashboard.services.flume.summary.configure': '配置代理',
  'dashboard.services.flume.agentsLabel': 'Flume',
  'dashboard.services.flume.agentLabel': 'Flume组件',
  'dashboard.services.flume.channels': '通道',
  'dashboard.services.flume.sources': '源',
  'dashboard.services.flume.sinks': '接收',
  'dashboard.services.flume.agent': '代理',

  'dashboard.services.hbase.summary': '{0}平均负载为 {1} 的区域服务器',
  'dashboard.services.hbase.masterServer': 'HBase 主机',
  'dashboard.services.hbase.masterServer.active': '活跃的 HBase 主机',
  'dashboard.services.hbase.masterServer.standby': '支持 HBase 主机',
  'dashboard.services.hbase.noMasterServer': '非活跃主机',
  'dashboard.services.hbase.masterServerHeap': '主堆',
  'dashboard.services.hbase.masterServerHeap.summary': '{0} / {1} ({2}% 使用)',
  'dashboard.services.hbase.masterServerUptime': '主服务器的正常运行时间',
  'dashboard.services.hbase.averageLoad': '平均负荷',
  'dashboard.services.hbase.averageLoadPerServer': '{0} regions per RegionServer',
  'dashboard.services.hbase.regionServers': 'RegionServers',
  'dashboard.services.hbase.regionServersSummary': '{0} 活动 / {1} 总共',
  'dashboard.services.hbase.phoenixServers': 'Phoenix 查询服务',
  'dashboard.services.hbase.phoenixServersSummary': '{0} 活动 / {1} 总共',
  'dashboard.services.hbase.chart.label': 'Request 总数',
  'dashboard.services.hbase.masterWebUI': 'Master 网页界面',
  'dashboard.services.hbase.regions.transition': 'Regions In Transition',
  'dashboard.services.hbase.masterStarted': '主机开启',
  'dashboard.services.hbase.masterActivated': '主机激活',

  'dashboard.services.ranger.rangerTagsyncs': 'Ranger Tagsyncs',

  'dashboard.services.components.started': '开始',
  'dashboard.services.components.stopped': '停止',
  'dashboard.services.components.total': '总共',

  'dashboard.services.hive.clients': 'Hive 客户端',
  'dashboard.services.hive.client': 'Hive 客户端',
  'dashboard.services.hive.metastore': 'Hive Metastore',
  'dashboard.services.hive.server2': 'HiveServer2',

  'dashboard.services.oozie.clients': 'Oozie 客户端',
  'dashboard.services.oozie.client': 'Oozie 客户端',
  'dashboard.services.storm.supervisor': 'Supervisor',
  'dashboard.services.storm.supervisors': 'Supervisors',

  'dashboard.services.configs.popup.stopService.header': '停止服务',
  'dashboard.services.configs.popup.stopService.body': '服务需要停止重新配置',
  'dashboard.services.configs.popup.restartService.header': '重新启动服务',
  'dashboard.services.configs.popup.restartService.body': '服务需要重新启动才能重新配置',

  'dashboard.services.zookeeper.server': 'ZooKeeper 服务',

  'dashboard.configHistory.title': '配置历史记录',
  'dashboard.configHistory.table.version.title': '服务',
  'dashboard.configHistory.table.configGroup.title': '配置组',
  'dashboard.configHistory.table.created.title': '创建',
  'dashboard.configHistory.table.configGroup.default': '默认',
  'dashboard.configHistory.table.empty': '没有历史记录显示',
  'dashboard.configHistory.table.notes.default': '{0}的初始配置',
  'dashboard.configHistory.table.notes.addService': '配置在添加服务时更新',
  'dashboard.configHistory.table.notes.no': '',
  'dashboard.configHistory.table.version.versionText': 'V{0}',
  'dashboard.configHistory.table.version.prefix': 'V',
  'dashboard.configHistory.table.current.tooltip': '{0}的当前配置：{1}',
  'dashboard.configHistory.table.restart.tooltip': '重新启动所需',
  'dashboard.configHistory.table.filteredHostsInfo': '{0} 的 {1} 显示版本',
  'dashboard.configHistory.info-bar.authoredOn': '创作',
  'dashboard.configHistory.info-bar.changesToHandle': '更改处理',
  'dashboard.configHistory.info-bar.showMore': '展示更多',
  'dashboard.configHistory.info-bar.save.popup.title': '保存配置',
  'dashboard.configHistory.info-bar.makeCurrent.popup.title': '进行当前确认',
  'dashboard.configHistory.info-bar.save.popup.placeholder': '你改变了什么?',
  'dashboard.configHistory.info-bar.save.popup.warningForPasswordChange':
    '此配置更改包括密码更改. 密码更改将被保存，但出于安全考虑，密码更改将不会在配置版本比较中显示.',
  'dashboard.configHistory.info-bar.save.popup.notesForPasswordChange': '密码更改',
  'dashboard.configHistory.info-bar.revert.button': '使成为当前',
  'dashboard.configHistory.info-bar.revert.versionButton': '使 {0} 当前',
  'dashboard.configHistory.info-bar.view.button.disabled': '您正在查看此版本.',
  'dashboard.configHistory.info-bar.compare.button.disabled': '你不能与同一版本进行比较.',
  'dashboard.configHistory.info-bar.revert.button.disabled': '这是当前版本.',

  'timeRange.presets.1hour': '1小时',
  'timeRange.presets.12hour': '12小时',
  'timeRange.presets.1day': '1天',
  'timeRange.presets.1week': '1周',
  'timeRange.presets.1month': '1月',
  'timeRange.presets.1year': '1年',

  'tableView.filters.all': '所有',
  'tableView.filters.filtered': '过滤',
  'tableView.filters.clearFilters': '清除过滤器',
  'tableView.filters.itemsPerPage': '每页项目:',
  'tableView.filters.paginationInfo': '{0} - {1} 的 {2}',
  'tableView.filters.clearAllFilters': '清除过滤器',
  'tableView.filters.showAll': '显示所有',
  'tableView.filters.filteredConfigVersionInfo': '{0} 的 {1} 版本显示',
  'tableView.filters.filteredAlertInstancesInfo': '{0} 的 {1} 实例显示',
  'tableView.filters.filteredLogsInfo': '{0} 的 {1} 日志显示',

  'rollingrestart.dialog.title': '重新开始 {0}',
  'rollingrestart.dialog.primary': '触发器重新启动',
  'rollingrestart.notsupported.hostComponent': '{0}组件不支持滚动重启',
  'rollingrestart.dialog.msg.restart': '这将一次重新启动指定数量的{0}.',
  'rollingrestart.dialog.msg.noRestartHosts': '滚动重新启动没有{0}',
  'rollingrestart.dialog.msg.maintainance': '注意: {0} {1} 在维护模式下将不会重新启动',
  'rollingrestart.dialog.msg.componentsAtATime': '{0} 一次',
  'rollingrestart.dialog.msg.timegap.prefix': '等待 ',
  'rollingrestart.dialog.msg.timegap.suffix': '批次之间的秒数 ',
  'rollingrestart.dialog.msg.toleration.prefix': '容忍最多 ',
  'rollingrestart.dialog.msg.toleration.suffix': '重新启动失败',
  'rollingrestart.dialog.err.invalid.batchsize': '重新启动批量大小无效: {0}',
  'rollingrestart.dialog.err.invalid.waitTime': '批次之间的等待时间无效: {0}',
  'rollingrestart.dialog.err.invalid.toleratesize': '无效的容错计数: {0}',
  'rollingrestart.dialog.warn.datanode.batch.size':
    '不建议一次重新启动多个DataNode. 否则可能导致数据不可用和/或可能的数据主动写入HDFS的数据丢失.',
  'rollingrestart.dialog.msg.serviceNotInMM':
    '注意：这将触发警报. 要抑制警报，请在触发滚动重新启动之前启用{0}的维护模式',
  'rollingrestart.dialog.msg.staleConfigsOnly': '只能使用陈旧的配置重新启动{0}',
  'rollingrestart.rest.context': '{0}的{2}的批次{1}的重新启动',
  'rollingrestart.context.allOnSelectedHosts': '重新启动所选主机上的所有组件',
  'rollingrestart.context.allForSelectedService': '重新启动所有组件 {0}',
  'rollingrestart.context.allWithStaleConfigsForSelectedService':
    '使用Stale Configs重新启动所有组件 {0}',
  'rollingrestart.context.allClientsOnSelectedHost': '重新启动所有客户端{0}',
  'rollingrestart.context.allWithStaleConfigsOnSelectedHost': '使用Stale配置重新启动组件 {0}',
  'rollingrestart.context.allOnSelectedHost': '重新启动所有组件 {0}',
  'rollingrestart.context.selectedComponentOnSelectedHost': '重新开始 {0}',
  'rollingrestart.context.default': '重新启动组件',

  'rolling.command.context': 'Rolling set {0} to state "{1}" - batch {2} of {3}',
  'rolling.nothingToDo.header': '没有任何操作',
  'rolling.nothingToDo.body': '{0} 所选主机已处于选定状态或维护模式.',

  'widget.type.gauge.description': '显示可以以百分比表示的指标的视图.',
  'widget.type.number.description': '显示可以用可选单位字段表示为单个数字的指标的视图.',
  'widget.type.graph.description': '显示可以在时间范围内以线形图或区域图表示的指标的视图.',
  'widget.type.template.description': '显示度量值以及模板文本的视图.',
  'widget.create.wizard.header': '创建小部件',
  'widget.create.wizard.step1.header': '选择类型',
  'widget.create.wizard.step1.body.text': '要创建什么类型的小部件?',
  'widget.create.wizard.step1.body.choose.tooltip': '单击选择',
  'widget.create.wizard.step2.header': '指标和表达',
  'widget.create.wizard.step2.template.header': '模板',
  'widget.create.wizard.step2.body.text':
    '用任何指标和有效的运算符定义表达式. </ br>在必要时使用括号.',
  'widget.create.wizard.step2.body.template':
    '使用任意数量的表达式和任何字符串定义模板. 表达式可以通过用双大括号括起来，从模板引用.',
  'widget.create.wizard.step2.body.warning': '注意：有效的操作符是 +, -, *, /',
  'widget.create.wizard.step2.body.invalid.expression': '表达式不完整或无效!',
  'widget.create.wizard.step2.body.invalid.expression2': '表达式无效!',
  'widget.create.wizard.step2.body.invalid.msg2': '只有这个字段中才允许使用数字或运算符.',
  'widget.create.wizard.step2.body.template.invalid.msg':
    '存在无效的表达式名称. 应该使用带有双大括号的名称"Expression＃".',
  'widget.create.wizard.step2.addExpression': '添加表达式',
  'widget.create.wizard.step2.addDataset': '添加数据集',
  'widget.create.wizard.step2.body.gauge.overflow.warning': '溢出！ 量规只能显示0到1之间的数字.',
  'widget.create.wizard.step2.allComponents': '所有 {0}',
  'widget.create.wizard.step2.activeComponents': '活性 {0}',
  'widget.create.wizard.step2.noMetricFound': '找不到指标',
  'widget.create.wizard.step3.widgetName': '名称',
  'widget.create.wizard.step3.sharing': '分享',
  'widget.create.wizard.step3.sharing.msg': '在小部件库中共享此小部件',
  'widget.create.wizard.step3.header': '名称和说明',
  'widget.create.wizard.step3.name.invalid.msg': '小工具名称太长. 请输入少于129个字符的小部件名称.',
  'widget.create.wizard.step3.name.invalidCharacter.msg':
    '无效的小部件名称. 只允许使用字母数字，下划线，连字符，百分比和空格.',
  'widget.create.wizard.step3.description.invalid.msg': '说明太长 请输入少于2049个字符的说明.',
  'widget.create.wizard.step3.description.invalidCharacter.msg':
    '输入无效. 只允许使用字母数字，下划线，连字符，百分比和空格.',

  'widget.edit.wizard.header': '编辑小部件',

  'widget.clone.body': '您确定要克隆当前小部件<b> {0} </ b>?',
  'widget.edit.body':
    '这是一个共享的小部件，编辑将会为所有用户更改此小部件. 您是否希望克隆该小部件?',
  'widget.edit.button.primary': '编辑共享',
  'widget.edit.button.secondary': '克隆和编辑',

  'dashboard.widgets.wizard.step2.dataSeries': '数据系列 {0}',
  'dashboard.widgets.wizard.step2.addMetrics': '在这里添加指标和运算符...',
  'dashboard.widgets.wizard.step2.newMetric': '+ 添加公制',
  'dashboard.widgets.wizard.step2.newOperator': '+ 添加运算符',
  'dashboard.widgets.wizard.step2.newNumber': '+ 加号码',
  'dashboard.widgets.wizard.step2.Component': '零件',
  'dashboard.widgets.wizard.step2.Metric': '公制',
  'dashboard.widgets.wizard.step2.selectComponent': '选择一个组件',
  'dashboard.widgets.wizard.step2.selectMetric': '选择公制',
  'dashboard.widgets.wizard.step2.addMetric': '添加公制',
  'dashboard.widgets.wizard.step2.aggregateFunction': '聚合函数',
  'dashboard.widgets.wizard.step2.aggregateFunction.scanOps': '选择聚合',
  'dashboard.widgets.wizard.step2.aggregateFunction.notFound': '没有发现聚合功能',
  'dashboard.widgets.wizard.step2.aggregateTooltip':
    '这个数学函数将被应用于计算所有主机组件中所选度量的单个值',
  'dashboard.widgets.wizard.step2.threshold.ok.tooltip':
    '这是窗口部件颜色从绿色（OK）变为橙色（警告）的阈值',
  'dashboard.widgets.wizard.step2.threshold.warning.tooltip':
    '这是窗口颜色从橙色（警告）变为红色（严重）的阈值',
  'dashboard.widgets.wizard.onClose.popup.body':
    '您有未保存的更改. 如果在此步骤中退出向导，则不会保存更改.',
  'dashboard.widgets.wizard.onClose.popup.discardAndExit': '放弃并退出',

  'restart.service.all': '重启所有',
  'restart.service.all.affected': '重启所有受到影响的',
  'restart.service.rest.context': '重启 {0}秒',

  'menu.item.dashboard': '仪表盘',
  'menu.item.services': '服务',
  'menu.item.hosts': '主机',
  'menu.item.admin': '管理员',
  'menu.item.alerts': '警报',
  'menu.item.views': '<i class="glyphicon glyphicon-th"></i>',
  'menu.item.views.noViews': '没有意见',

  'bulkOperation.loading': '载入中...',
  'jobs.nothingToShow': '没有作业要显示',
  'jobs.loadingTasks': '载入中...',
  'jobs.error.ats.down': '由于YARN应用程序时间轴服务器未运行，因此无法显示作业数据.',
  'jobs.error.400': '无法加载数据.',
  'jobs.table.custom.date.am': '上午',
  'jobs.table.custom.date.pm': '下午',
  'jobs.table.custom.date.header': '选择时间范围',
  'jobs.table.job.fail': '作业无法运行',
  'jobs.customDateFilter.error.required': '这是必填栏',
  'jobs.customDateFilter.error.incorrect': '日期不正确',
  'jobs.customDateFilter.error.laterThanNow': '指定的时间是将来',
  'jobs.customDateFilter.error.date.order': '结束日期必须在开始日期之后',
  'jobs.customDateFilter.startTime': '开始时间',
  'jobs.customDateFilter.endTime': '结束时间',
  'jobs.customDateFilter.duration.15min': '15 分钟',
  'jobs.customDateFilter.duration.30min': '30 分钟',
  'jobs.customDateFilter.duration.1hr': '1 小时',
  'jobs.customDateFilter.duration.2hr': '2 小时',
  'jobs.customDateFilter.duration.4hr': '4 小时',
  'jobs.customDateFilter.duration.12hr': '12 小时',
  'jobs.customDateFilter.duration.24hr': '24 小时',
  'jobs.customDateFilter.duration.1w': '1 周',
  'jobs.customDateFilter.duration.1m': '1 月',
  'jobs.customDateFilter.duration.1yr': '1 年',

  'views.main.yourViews': '你的视图',
  'views.main.noViews': '无视图',
  'views.main.instance.noDescription': '没有说明',

  'number.validate.empty': '不能是空的',
  'number.validate.notValidNumber': '不是有效的数字',
  'number.validate.lessThanMinimum': '值小于 {0}',
  'number.validate.moreThanMaximum': '值大于 {0}',

  'common.combobox.placeholder': '过滤...',
  'common.combobox.dropdown.overridden': '被覆盖的属性',
  'common.combobox.dropdown.final': '最终属性',
  'common.combobox.dropdown.changed': '更改属性',
  'common.combobox.dropdown.issues': '显示财产问题',
  'common.combobox.dropdown.warnings': '显示财产警告',

  'quick.links.error.quicklinks.unavailable.label': '快速链接不可用',
  'quick.links.error.nohosts.label': '无法获取主机信息 {0}',
  'quick.links.error.oozie.label': '快速链接不可用. 确保Oozie服务器正在运行.',
  'quick.links.publicHostName': '{0} ({1})',
  'quick.links.label.active': '活动',
  'quick.links.label.standby': '待机',

  'contact.administrator': '有关详细信息，请联系系统管理员!',

  'config.group.selection.dialog.title': '{0} 配置组',
  'config.group.selection.dialog.subtitle': '选择或创建配置值将被覆盖的{0}配置组.',
  'config.group.selection.dialog.option.select': '选择现有的{0}配置组',
  'config.group.selection.dialog.option.select.msg': '属于所选组的主机的覆盖属性将被更改.',
  'config.group.selection.dialog.option.create': '创建一个新的{0}配置组',
  'config.group.selection.dialog.option.create.msg':
    '将使用给定的名称创建一个新的{0}配置组. 最初，组中不会有主机，只有被选择的属性被覆盖.',
  'config.group.selection.dialog.err.name.exists': '具有给定名称的配置组已存在',
  'config.group.selection.dialog.err.create': '创建新配置组时出错 [{0}]',
  'config.group.selection.dialog.no.groups': '没有现有的{0}配置组.',
  'config.group.host.switch.dialog.title': '更改组',

  'config.group.save.confirmation.header': '保存配置组',
  'config.group.save.confirmation.msg': '单击<em>管理主机</ em>以管理配置组的主机成员资格',
  'config.group.save.confirmation.configGroup': '配置组',
  'config.group.save.confirmation.saved': '已成功保存',
  'config.group.save.confirmation.manage.button': '管理主机',
  'config.group.description.default': '创建新的配置组 {0}',

  'config.infoMessage.wrong.value.for.widget': '配置值不能转换为UI控制值',
  'config.infoMessage.wrong.value.for.combobox.widget': '"{0}" 在有效值的列表中不可用',
  'config.warnMessage.outOfBoundaries.greater': '不建议大于{0}的值',
  'config.warnMessage.outOfBoundaries.less': '不推荐小于{0}的值',

  'errorMessage.config.required': '这是必需的',
  'errorMessage.config.number.integer': '必须只包含数字',
  'errorMessage.config.number.float': '必须是有效的数字',
  'errorMessage.config.mail': '必须是一个有效的E-mail地址',
  'errorMessage.config.user': '价值无效',
  'errorMessage.config.ldapUrl': '必须是有效的LDAP网址',
  'errorMessage.config.password': '密码不匹配',
  'errorMessage.config.password.length': '密码应至少包含{0}个符号',
  'errorMessage.config.directory.heterogeneous':
    'dir格式是错误的，可以 "[{storage type}]/{dir name}"',
  'errorMessage.config.directory.default': '开始时必须是斜杠或驱动器，不能包含空格',
  'errorMessage.config.directory.allowed': '不能以"家"开头',
  'errorMessage.config.spaces.trailing': '不能包含尾随空格',
  'errorMessage.config.spaces.trim': '不能包含前导或尾随空格',

  'utils.ajax.errorMessage': '错误信息',
  'utils.ajax.defaultErrorPopupBody.message': '接收到 {0} API的方法: {1}',
  'utils.ajax.defaultErrorPopupBody.statusCode': '{0} 状态码',

  'wizard.inProgress': '{0} 进行中',

  'alerts.instance.fullLogPopup.header': '实例响应',
  'admin.addHawqStandby.button.enable': '添加HAWQ待机主',
  'admin.addHawqStandby.closePopup':
    '添加HAWQ待机主向导正在进行中. 你必须允许向导' +
    ' 使Ambari成为可用状态. 如果您选择退出，您必须遵循文档化手册' +
    ' 完成或恢复添加HAWQ待机主控的指令. 确定要退出向导?',
  'admin.addHawqStandby.wizard.header': '添加HAWQ待机主控向导',
  'admin.addHawqStandby.wizard.step1.header': '开始',
  'admin.addHawqStandby.wizard.step1.body':
    '此向导将引导您完成添加HAWQ Standby的过程 ' +
    'Master作为当前HAWQ主控主机的备份. 添加HAWQ Standby Master后，它将作为<i>热备份</ i> ' +
    '在主HAWQ主站主机变为不可操作的情况下可能会被激活.<br/><br/>' +
    '<b>此过程重新启动HAWQ服务. 在计划的群集维护窗口中执行此过程.</b>',
  'admin.addHawqStandby.wizard.step2.header': '选择主机',
  'admin.addHawqStandby.wizard.step2.body': '选择将运行HAWQ Standby Master的主机',
  'admin.addHawqStandby.wizard.step3.header': '检查',
  'admin.addHawqStandby.wizard.step3.configs_changes': '查看配置更改.',
  'admin.addHawqStandby.wizard.step3.confirm.host.body': '<b>确认您的主机选择.</b>',
  'admin.addHawqStandby.wizard.step3.confirm.config.body':
    '<p class="alert alert-info">' +
    '<p><b>查看配置更改.</b></p>' +
    '以下列出了向导将添加HAWQ Standby Master的配置更改. ' +
    '此信息仅适用于<b>仅审核</ b>，不可编辑.</div>',
  'admin.addHawqStandby.wizard.step3.hawqMaster': '当前HAWQ Master',
  'admin.addHawqStandby.wizard.step3.newHawqStandby': '新的HAWQ待机主机',
  'admin.addHawqStandby.wizard.step3.confirm.dataDir.title': 'HAWQ待机主目录确认',
  'admin.addHawqStandby.wizard.step3.confirm.dataDir.body':
    '在完成此过程之前，请确保您 ' +
    '重命名HAWQ待机主主机<b> {1} </ b>（如果存在）（例如， ' +
    '更改为{0} _old）.<br/> <br/> <b>如果HAWQ Standby Master主机上存在{0}，则新的HAWQ' +
    '备用主控可能会使用过时的数据启动，使集群处于不一致的状态.</b><br/><br/>' +
    '单击确认以指示您已重命名HAWQ Standby Master主机上的任何现有的<b> {0} </ b>目录 <b>{1}</b>.',
  'admin.addHawqStandby.step4.save.configuration.note': '此配置由添加HAWQ待机向导创建',
  'admin.addHawqStandby.wizard.step4.header': '配置组件',
  'admin.addHawqStandby.wizard.step4.task0.title': '停止HAWQ服务',
  'admin.addHawqStandby.wizard.step4.task1.title': '安装HAWQ Standby Master',
  'admin.addHawqStandby.wizard.step4.task2.title': '重新配置HAWQ',
  'admin.addHawqStandby.wizard.step4.task3.title': '启动HAWQ服务',
  'admin.addHawqStandby.wizard.step4.notice.inProgress': '正在部署HAWQ Standby Master时请等待.',
  'admin.addHawqStandby.wizard.step4.notice.completed': 'HAWQ Standby Master已成功添加.',
  'admin.removeHawqStandby.button.enable': '删除HAWQ待机',
  'admin.removeHawqStandby.wizard.header': '删除HAWQ待机向导',
  'admin.removeHawqStandby.wizard.step1.header': '开始',
  'admin.removeHawqStandby.wizard.step1.body':
    '此向导将引导您完成删除HAWQ Standby Master的过程 ' +
    '在HAWQ Standby Master主机故障或维护的情况下. 删除HAWQ Standby Master后，现有HAWQ Master将以独立模式运行，无需备份.' +
    '<br/><br/><b>此过程停止并重新启动HAWQ服务. 在计划的集群期间执行此过程 ' +
    '维护窗口，仅当HAWQ主站正常工作时.</b>' +
    '<br/><br/>完成此向导后，HAWQ群集将不再具有待机主站. ' +
    '作为最佳做法，请使用“添加HAWQ待机主服务器”服务操作为集群配置新的HAWQ待机主服务器.',
  'admin.removeHawqStandby.wizard.step2.header': '检查',
  'admin.removeHawqStandby.wizard.step2.hawqStandby': '<b>当前HAWQ Standby:</b>',
  'admin.removeHawqStandby.wizard.step2.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>检查配置更改.</b></p>删除HAWQ Standby Master后，向导会删除 ' +
    'hawq_standby_address_host 配置从hawq-site.xml. 作为一个最佳实践，在向导完成后你应该配置一个新的HAWQ备用主机.</div>',
  'admin.removeHawqStandby.wizard.step2.confirm.host.body': '<b>查看HAWQ Standby 主机更改.</b>',
  'admin.removeHawqStandby.wizard.step2.confirmPopup.body':
    '您是否希望继续删除HAWQ Standby 主机？ 请确认，继续之前您将无法从Ambari回滚.',
  'admin.removeHawqStandby.wizard.step3.header': '完成设置',
  'admin.removeHawqStandby.wizard.step3.task0.title': '移除HAWQ Standby',
  'admin.removeHawqStandby.wizard.step3.task1.title': '停止HAWQ服务',
  'admin.removeHawqStandby.wizard.step3.task2.title': '重新配置HAWQ',
  'admin.removeHawqStandby.wizard.step3.task3.title': '删除角色：HAWQ待机',
  'admin.removeHawqStandby.wizard.step3.task4.title': '启动HAWQ服务',
  'admin.removeHawqStandby.closePopup':
    '删除HAWQ待机向导正在进行中. 你必须允许向导' +
    ' 完成使Ambari处于可用状态. 如果您选择退出，您必须遵循手动说明' +
    ' 返回到一个稳定的状态. 确定要退出向导?',
  'admin.removeHawqStandby.wizard.step3.notice.inProgress': '请稍候，正在删除HAWQ Standby',
  'admin.removeHawqStandby.wizard.step3.notice.completed': 'HAWQ Standby已成功删除.',
  'admin.removeHawqStandby.wizard.step3.removeHawqStandbyCommand.context':
    '执行HAWQ Standby 删除命令',
  'admin.removeHawqStandby.wizard.step3.save.configuration.note':
    '此配置由删除HAWQStandby 向导创建',
  'admin.activateHawqStandby.button.enable': '激活HAWQStandby 主机',
  'admin.activateHawqStandby.wizard.header': '激活HAWQStandby 主机向导',
  'admin.activateHawqStandby.wizard.step1.header': '开始',
  'admin.activateHawqStandby.wizard.step1.body':
    '此向导将引导您完成激活HAWQ Standby 主机的过程 ' +
    '在HAWQ主机故障的情况下. 激活HAWQ Standby Master后, ' +
    '它被推广为新的HAWQ Master和以前的HAWQ Master配置 ' +
    '已从集群中删除.<br/> <br/> <b>此过程重新启动HAWQ服务. ' +
    '在计划的集群维护窗口中执行此过程，除非当前 ' +
    'HAWQ 主机无法正常工作.</ b> <br/>在完成此向导后，HAWQ群集 ' +
    '将不再有Standby 主机. 作为最佳实践，使用 “Add HAWQ Standby Master” ' +
    '服务操作为集群配置新的HAWQStandby 主服务器.',
  'admin.activateHawqStandby.wizard.step2.header': '检查',
  'admin.highAvailability.wizard.step2.toBeDeleted': '需删除',
  'admin.activateHawqStandby.wizard.step2.hawqMaster': '<b>当前HAWQ主机:</b>',
  'admin.activateHawqStandby.wizard.step2.hawqStandby': '<b>当前HAWQ Standby 主机:</b>',
  'admin.activateHawqStandby.wizard.step2.toBeActivated': '新的HAWQ主机需要激活',
  'admin.activateHawqStandby.step4.save.configuration.note': '此配置由激活HAWQ Standby 向导创建',
  'admin.activateHawqStandby.wizard.step2.confirm.config.body':
    '<div class="alert alert-info">' +
    '<p><b>查看配置更改.</b></p>向导将进行以下配置更改. ' +
    '此信息仅供审核，无法编辑.<br/><br/><b>激活HAWQ Standby 后 ' +
    'Master，该向导将从hawq-site.xml中删除hawq_standby_address_host属性.</b> ' +
    '作为最佳做法，您应该在向导完成后配置新的HAWQ Standby Master主机.</div>',
  'admin.activateHawqStandby.wizard.step2.confirm.host.body':
    '<b>查看HAWQ Master＆Standby主机变化.</b>',
  'admin.activateHawqStandby.wizard.step2.confirmPopup.body':
    '您是否希望继续激活HAWQ Standby 主机? ' + '请确认，继续之前您将无法从Ambari回滚.',
  'admin.activateHawqStandby.wizard.step3.header': '完成安装',
  'admin.activateHawqStandby.wizard.step3.task0.title': '激活HAWQStandby 主机',
  'admin.activateHawqStandby.wizard.step3.task1.title': '停止HAWQ服务',
  'admin.activateHawqStandby.wizard.step3.task2.title': '重新配置HAWQ',
  'admin.activateHawqStandby.wizard.step3.task3.title': '安装角色: 新的HAWQ主机',
  'admin.activateHawqStandby.wizard.step3.task4.title': '删除角色: 旧的HAWQ主机',
  'admin.activateHawqStandby.wizard.step3.task5.title': '删除角色: 旧的HAWQ备机',
  'admin.activateHawqStandby.wizard.step3.task6.title': '开启HAWQ服务',
  'admin.activateHawqStandby.closePopup':
    '激活HAWQStandby 向导正在进行中. 你必须允许向导' +
    ' 使Ambari成为可用状态. 如果您选择退出，您必须遵循手动说明' +
    ' 恢复稳定状态. 确定要退出向导?',
  'admin.activateHawqStandby.wizard.step3.notice.inProgress':
    '当HAWQ Standby 主机正在被激活时请等待',
  'admin.activateHawqStandby.wizard.step3.notice.completed': 'HAWQ Standby 主机已成功激活.',
  'admin.activateHawqStandby.wizard.step3.activateHawqStandbyCommand.context':
    '执行HAWQ Standby 主机激活命令',
  'admin.serviceAutoStart.save.popup.title': '保存自动修改配置',
  'admin.serviceAutoStart.save.popup.body':
    '你正在修改自动开始配置.' + '点击 <b>保存</b> 提交修改或者 <b>放弃</b> 来恢复你的修改',
  'admin.serviceAutoStart.save.popup.transition.title': '警告',
  'admin.serviceAutoStart.save.popup.transition.body': '你没有保存修改',

  'reset.ui.states': '重置UI状态',
  'reset.ui.states.body':
    '只有当用户界面不正常（例如登录时导航不正确，UI被卡住并且无法加载等），您应该继续进行. 您确定要重置UI状态吗？',

  'app.logger.ajax': 'Ajax加载时间：{0} [{1}]',
  'app.logger.wizard': '向导步骤{0}加载时间',
};

export default {};
export { oneData };
