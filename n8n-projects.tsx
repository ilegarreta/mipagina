"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  Database,
  ExternalLink,
  GitBranch,
  Mail,
  MessageSquare,
  Search,
  Settings,
  Webhook,
  Zap,
  CheckCircle,
  AlertCircle,
  Pause,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Automatización de Leads CRM",
    description:
      "Workflow que captura leads desde formularios web y los sincroniza automáticamente con HubSpot, enviando notificaciones al equipo de ventas.",
    status: "active",
    category: "crm",
    integrations: ["Webhook", "HubSpot", "Slack", "Gmail"],
    lastUpdated: "2024-01-15",
    executions: 1247,
    nodes: 12,
    complexity: "medium",
  },
  {
    id: 2,
    title: "Procesamiento de Facturas",
    description:
      "Sistema automatizado que procesa facturas recibidas por email, extrae datos importantes y los registra en Google Sheets para contabilidad.",
    status: "active",
    category: "finance",
    integrations: ["Gmail", "Google Sheets", "PDF Parser", "Telegram"],
    lastUpdated: "2024-01-12",
    executions: 892,
    nodes: 8,
    complexity: "high",
  },
  {
    id: 3,
    title: "Monitor de Redes Sociales",
    description:
      "Monitorea menciones de marca en Twitter y LinkedIn, analiza el sentimiento y envía reportes diarios al equipo de marketing.",
    status: "paused",
    category: "marketing",
    integrations: ["Twitter API", "LinkedIn", "OpenAI", "Discord"],
    lastUpdated: "2024-01-10",
    executions: 2156,
    nodes: 15,
    complexity: "high",
  },
  {
    id: 4,
    title: "Backup Automático de Datos",
    description:
      "Workflow que realiza backups diarios de bases de datos MySQL y los sube a Google Drive con notificaciones de estado.",
    status: "active",
    category: "operations",
    integrations: ["MySQL", "Google Drive", "Cron", "Email"],
    lastUpdated: "2024-01-14",
    executions: 45,
    nodes: 6,
    complexity: "low",
  },
  {
    id: 5,
    title: "Onboarding de Empleados",
    description:
      "Automatiza el proceso de incorporación de nuevos empleados: crea cuentas, asigna tareas y programa reuniones de bienvenida.",
    status: "active",
    category: "hr",
    integrations: ["Google Workspace", "Notion", "Calendar", "Slack"],
    lastUpdated: "2024-01-13",
    executions: 23,
    nodes: 18,
    complexity: "high",
  },
  {
    id: 6,
    title: "Análisis de Ventas Diario",
    description:
      "Genera reportes automáticos de ventas diarias combinando datos de Shopify, Stripe y Google Analytics.",
    status: "active",
    category: "analytics",
    integrations: ["Shopify", "Stripe", "Google Analytics", "Telegram"],
    lastUpdated: "2024-01-16",
    executions: 16,
    nodes: 10,
    complexity: "medium",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "paused":
      return <Pause className="h-4 w-4 text-yellow-500" />
    case "error":
      return <AlertCircle className="h-4 w-4 text-red-500" />
    default:
      return <Clock className="h-4 w-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
    case "paused":
      return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
    case "error":
      return "bg-gradient-to-r from-red-400 to-pink-500 text-white"
    default:
      return "bg-gradient-to-r from-gray-400 to-slate-500 text-white"
  }
}

const getComplexityColor = (complexity: string) => {
  switch (complexity) {
    case "low":
      return "bg-gradient-to-r from-blue-400 to-cyan-500 text-white"
    case "medium":
      return "bg-gradient-to-r from-orange-400 to-amber-500 text-white"
    case "high":
      return "bg-gradient-to-r from-purple-400 to-violet-500 text-white"
    default:
      return "bg-gradient-to-r from-gray-400 to-slate-500 text-white"
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "crm":
      return <Database className="h-5 w-5" />
    case "finance":
      return <Calendar className="h-5 w-5" />
    case "marketing":
      return <MessageSquare className="h-5 w-5" />
    case "operations":
      return <Settings className="h-5 w-5" />
    case "hr":
      return <Mail className="h-5 w-5" />
    case "analytics":
      return <Zap className="h-5 w-5" />
    default:
      return <GitBranch className="h-5 w-5" />
  }
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Proyectos n8n
              </h1>
              <p className="text-blue-100 mt-2 text-lg">Automatizaciones y workflows implementados</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar proyectos..."
                  className="pl-10 w-64 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold">
                <Zap className="h-4 w-4 mr-2" />
                Nuevo Proyecto
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 font-medium">Total Proyectos</p>
                  <p className="text-3xl font-bold">{projects.length}</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <GitBranch className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 font-medium">Activos</p>
                  <p className="text-3xl font-bold">{projects.filter((p) => p.status === "active").length}</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100 font-medium">Ejecuciones</p>
                  <p className="text-3xl font-bold">
                    {projects.reduce((acc, p) => acc + p.executions, 0).toLocaleString()}
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100 font-medium">Integraciones</p>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <Webhook className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              Todos
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              Activos
            </TabsTrigger>
            <TabsTrigger value="crm" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              CRM
            </TabsTrigger>
            <TabsTrigger value="marketing" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              Marketing
            </TabsTrigger>
            <TabsTrigger value="finance" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              Finanzas
            </TabsTrigger>
            <TabsTrigger
              value="operations"
              className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
            >
              Operaciones
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(project.category)}
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </div>
                      {getStatusIcon(project.status)}
                    </div>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Status and Complexity */}
                      <div className="flex gap-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status === "active" ? "Activo" : project.status === "paused" ? "Pausado" : "Error"}
                        </Badge>
                        <Badge className={getComplexityColor(project.complexity)}>
                          {project.complexity === "low" ? "Baja" : project.complexity === "medium" ? "Media" : "Alta"}
                        </Badge>
                      </div>

                      {/* Integrations */}
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Integraciones:</p>
                        <div className="flex flex-wrap gap-1">
                          {project.integrations.slice(0, 3).map((integration) => (
                            <Badge key={integration} variant="outline" className="text-xs">
                              {integration}
                            </Badge>
                          ))}
                          {project.integrations.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.integrations.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Nodos</p>
                          <p className="font-semibold">{project.nodes}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Ejecuciones</p>
                          <p className="font-semibold">{project.executions.toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Last Updated */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Actualizado: {new Date(project.lastUpdated).toLocaleDateString("es-ES")}</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 border-gray-300"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Configurar
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Workflow
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would filter the projects array */}
          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.status === "active")
                .map((project) => (
                  <Card
                    key={project.id}
                    className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50"
                  >
                    {/* Same card content as above */}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(project.category)}
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                        </div>
                        {getStatusIcon(project.status)}
                      </div>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(project.status)}>Activo</Badge>
                          <Badge className={getComplexityColor(project.complexity)}>
                            {project.complexity === "low" ? "Baja" : project.complexity === "medium" ? "Media" : "Alta"}
                          </Badge>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Integraciones:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.integrations.slice(0, 3).map((integration) => (
                              <Badge key={integration} variant="outline" className="text-xs">
                                {integration}
                              </Badge>
                            ))}
                            {project.integrations.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.integrations.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Nodos</p>
                            <p className="font-semibold">{project.nodes}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Ejecuciones</p>
                            <p className="font-semibold">{project.executions.toLocaleString()}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>Actualizado: {new Date(project.lastUpdated).toLocaleDateString("es-ES")}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 border-gray-300"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Configurar
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Workflow
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
